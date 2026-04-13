import React from 'react';
import { jsPDF } from 'jspdf';

const ReportGenerator = () => {
    const generatePDF = () => {
        const doc = new jsPDF({
            orientation: 'portrait',
            unit: 'mm',
            format: 'a4'
        });

        const primaryColor = [37, 99, 235]; // #2563eb
        const margin = 20;
        let y = 20;

        // Helper to add centered title
        const addTitle = (text, size = 18) => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(size);
            const textWidth = doc.getTextWidth(text);
            doc.text(text, (210 - textWidth) / 2, y);
            y += 10;
        };

        // Helper to add sections
        const addSection = (title, content) => {
            doc.setFont('helvetica', 'bold');
            doc.setFontSize(14);
            doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.text(title, margin, y);
            y += 7;

            doc.setFont('helvetica', 'normal');
            doc.setFontSize(11);
            doc.setTextColor(60, 60, 60);

            const lines = doc.splitTextToSize(content, 170);
            doc.text(lines, margin, y);
            y += (lines.length * 6) + 10;

            // Check for page overflow
            if (y > 270) {
                doc.addPage();
                y = 20;
            }
        };

        // Header
        addTitle('Informe de Auditoria de Accesibilidad Web', 20);
        addTitle('Proyecto desarrollado en React', 14);

        y += 10;
        doc.setFontSize(10);
        doc.setTextColor(100, 100, 100);
        doc.text(`Autor: Ivan Trujillo`, margin, y);
        y += 5;
        doc.text(`Fecha: ${new Date().toLocaleDateString()}`, margin, y);
        y += 20;

        // 1. Introduccion
        addSection('Introduccion',
            'Este documento presenta la auditoria de accesibilidad realizada sobre la web desarrollada con React. El objetivo ha sido verificar el cumplimiento de los criterios WCAG 2.2 nivel AA.'
        );

        // 2. Marco conceptual
        addSection('Marco conceptual (POUR)',
            'La accesibilidad web se basa en cuatro principios: Perceptible, Operable, Comprensible y Robusto.'
        );

        // 3. Mejoras implementadas
        addSection('Mejoras implementadas',
            'Se han corregido problemas de contraste, jerarquia de encabezados, etiquetas de formulario y navegacion por teclado con foco visible.'
        );

        // 4. Tecnologias avanzadas
        addSection('Accesibilidad Avanzada',
            'Se ha implementado prefers-reduced-motion para respetar la configuracion del sistema del usuario y mejorar la experiencia en personas con sensibilidad al movimiento.'
        );

        doc.save('Informe_Accesibilidad_IvanTrujillo.pdf');
    };

    return (
        <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                </div>
                <div>
                    <h3 className="text-lg font-bold text-gray-900">Informe de Accesibilidad</h3>
                    <p className="text-sm text-gray-500 font-medium">Cumplimiento WCAG 2.2 Nivel AA</p>
                </div>
            </div>

            <button
                onClick={generatePDF}
                className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold shadow-md hover:shadow-xl hover:bg-blue-600 hover:text-white transition-all focus-visible:ring-2 focus-visible:ring-blue-600"
                aria-label="Descargar Informe de Auditoria en PDF"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></svg>
                Descargar Informe PDF
            </button>
        </div>
    );
};

export default ReportGenerator;
