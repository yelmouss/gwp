import { useCallback } from 'react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

const usePdfExport = () => {
  const exportToPdf = useCallback(async (elementId, filename = 'guide-wp') => {
    try {
      const element = document.getElementById(elementId);
      if (!element) {
        console.error(`Element with id ${elementId} not found`);
        return;
      }

      // Ajouter la classe pour l'exportation PDF
      element.classList.add('pdf-export');

      // Configuration pour html2canvas optimisée pour PDF paysage
      const canvas = await html2canvas(element, {
        scale: 2, // Meilleure qualité
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        width: 842, // A4 paysage width
        height: 595, // A4 paysage height
        scrollX: 0,
        scrollY: 0,
        windowWidth: 842,
        windowHeight: 595,
        ignoreElements: function(element) {
          // Ignorer les éléments qui peuvent causer des problèmes
          return element.tagName === 'IFRAME' || element.classList.contains('ignore-pdf');
        },
        logging: false,
        foreignObjectRendering: true,
        removeContainer: true,
      });

      // Retirer la classe après capture
      element.classList.remove('pdf-export');

      // Configuration du PDF en mode paysage
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling']
      });

      // Dimensions A4 paysage en pixels
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      // Calculer les dimensions pour maintenir le ratio
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

      const scaledWidth = imgWidth * ratio;
      const scaledHeight = imgHeight * ratio;

      // Centrer l'image dans le PDF
      const x = (pdfWidth - scaledWidth) / 2;
      const y = (pdfHeight - scaledHeight) / 2;

      // Convertir canvas en image et ajouter au PDF
      const imgData = canvas.toDataURL('image/jpeg', 1.0);
      pdf.addImage(imgData, 'JPEG', x, y, scaledWidth, scaledHeight);

      // Sauvegarder le PDF
      pdf.save(`${filename}.pdf`);

    } catch (error) {
      console.error('Erreur lors de l\'exportation PDF:', error);
    }
  }, []);

  const exportMultipleToPdf = useCallback(async (elementIds, filename = 'guide-wp-complet') => {
    try {
      // Configuration du PDF en mode paysage
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'px',
        format: 'a4',
        hotfixes: ['px_scaling']
      });

      // Dimensions A4 paysage en pixels
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      let isFirstPage = true;

      for (const elementId of elementIds) {
        const element = document.getElementById(elementId);
        if (!element) {
          console.warn(`Element with id ${elementId} not found`);
          continue;
        }

        // Ajouter la classe pour l'exportation PDF
        element.classList.add('pdf-export');

        // Configuration pour html2canvas optimisée pour PDF paysage
        const canvas = await html2canvas(element, {
          scale: 2, // Meilleure qualité
          useCORS: true,
          allowTaint: true,
          backgroundColor: '#ffffff',
          width: 842, // A4 paysage width
          height: 595, // A4 paysage height
          scrollX: 0,
          scrollY: 0,
          windowWidth: 842,
          windowHeight: 595,
        });

        // Retirer la classe après capture
        element.classList.remove('pdf-export');

        // Calculer les dimensions pour maintenir le ratio
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);

        const scaledWidth = imgWidth * ratio;
        const scaledHeight = imgHeight * ratio;

        // Centrer l'image dans le PDF
        const x = (pdfWidth - scaledWidth) / 2;
        const y = (pdfHeight - scaledHeight) / 2;

        // Ajouter une nouvelle page sauf pour la première
        if (!isFirstPage) {
          pdf.addPage();
        }
        isFirstPage = false;

        // Convertir canvas en image et ajouter au PDF
        const imgData = canvas.toDataURL('image/jpeg', 1.0);
        pdf.addImage(imgData, 'JPEG', x, y, scaledWidth, scaledHeight);
      }

      // Sauvegarder le PDF
      pdf.save(`${filename}.pdf`);

    } catch (error) {
      console.error('Erreur lors de l\'exportation PDF multiple:', error);
    }
  }, []);

  return { exportToPdf, exportMultipleToPdf };
};

export default usePdfExport;
