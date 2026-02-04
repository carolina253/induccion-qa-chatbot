// config.js - Configuración COMPLETA del chatbot de inducción
const CONFIG = {
    // ⭐⭐ CAMBIAR ESTO: URLs de tus sistemas reales ⭐⭐
    urls: {
        testlink: 'https://testlink.tuempresa.com',
        azure: 'https://dev.azure.com/tuempresa',
        planner: 'https://tasks.office.com/tuempresa',
        sharepoint: 'https://tuempresa.sharepoint.com',
        loom: 'https://www.loom.com/share/',
        teams: 'https://teams.microsoft.com/'
    },
    
    // ⭐⭐ CAMBIAR ESTO: Información REAL de tu equipo ⭐⭐
    team: [
        {
            name: 'Carlos Martínez',
            role: 'Mentor / QA Senior',
            email: 'carlos.martinez@tuempresa.com',
            phone: '+57 300 123 4567',
            whatsapp: '+57 300 123 4567',
            specialty: 'Automatización con Selenium y Playwright',
            availability: 'Lunes a Jueves: 9:00 AM - 5:00 PM',
            photo: 'carlos.jpg',
            teamsLink: 'https://teams.microsoft.com/l/chat/0/0?users=carlos.martinez@tuempresa.com'
        },
        {
            name: 'Ana Rodríguez',
            role: 'Líder de Control de Calidad',
            email: 'ana.rodriguez@tuempresa.com',
            phone: '+57 300 987 6543',
            whatsapp: '+57 300 987 6543',
            specialty: 'Gestión de pruebas y procesos QA',
            availability: 'Reuniones grupales: Viernes 9:00 AM',
            photo: 'ana.jpg',
            teamsLink: 'https://teams.microsoft.com/l/chat/0/0?users=ana.rodriguez@tuempresa.com'
        }
    ],
    
    // ⭐⭐ CAMBIAR ESTO: Videos tutoriales REALES ⭐⭐
    videos: [
        {
            id: 'azure-intro',
            title: 'Azure DevOps en 3 minutos',
            url: 'https://www.youtube.com/watch?v=TU_VIDEO_REAL',
            duration: '3:15',
            description: 'Cómo navegar en Azure y reportar bugs',
            thumbnail: 'azure-thumb.jpg'
        },
        {
            id: 'testlink-first-case',
            title: 'TestLink: Crear tu primer caso',
            url: 'https://www.loom.com/share/TU_ID_REAL',
            duration: '2:45',
            description: 'Paso a paso para crear casos de prueba',
            thumbnail: 'testlink-thumb.jpg'
        }
    ],
    
    // ⭐⭐ CAMBIAR ESTO: Documentos REALES para descargar ⭐⭐
    documents: [
        {
            id: 'test-case-template',
            title: 'Plantilla de caso de prueba',
            description: 'Formato estándar para todos los casos',
            url: 'https://drive.google.com/archivo-real.docx',
            type: 'docx',
            icon: '📄'
        },
        {
            id: 'checklist-first-day',
            title: 'Checklist primer día',
            description: 'Qué hacer en tus primeros 3 días',
            url: 'https://tuempresa.sharepoint.com/checklist.pdf',
            type: 'pdf',
            icon: '✅'
        }
    ],
    
    // ============================================
    // ⭐⭐ SECCIÓN NUEVA: INFORMACIÓN DE CONTACTO ⭐⭐
    // ============================================
    contact: {
        // WhatsApp (formato internacional: +57 300 123 4567)
        whatsapp: {
            general: '+57 300 123 4567',      // Soporte general QA
            mentor: '+57 300 987 6543',       // Mentor principal
            technical: '+57 301 234 5678',    // Soporte técnico
            emergency: '+57 302 345 6789',    // Emergencias 24/7
            // Mensaje predeterminado para WhatsApp
            defaultMessage: 'Hola, soy aprendiz SENA de QA y necesito ayuda con:'
        },
        
        // Correos electrónicos
        email: {
            support: 'soporte.qa@tuempresa.com',      // Soporte general
            mentors: 'mentores.qa@tuempresa.com',     // Equipo de mentores
            admin: 'admin.qa@tuempresa.com',          // Asuntos administrativos
            bugs: 'bugs.qa@tuempresa.com',            // Solo reporte de bugs
            hr: 'rh.qa@tuempresa.com'                 // Recursos humanos
        },
        
        // Microsoft Teams / Slack
        teams: {
            mentorChat: 'https://teams.microsoft.com/l/chat/0/0?users=carlos.mentor@tuempresa.com',
            supportChannel: 'https://teams.microsoft.com/l/channel/19%3Aabc123@thread.tacv2/General',
            qaChannel: 'https://teams.microsoft.com/l/channel/19%3Aqa-team@thread.tacv2',
            // Si usas Slack en lugar de Teams
            slack: {
                support: 'https://slack.com/app_redirect?channel=soporte-qa',
                general: 'https://slack.com/app_redirect?channel=qa-general'
            }
        },
        
        // Tiempos de respuesta esperados
        responseTimes: {
            whatsapp: '5-15 minutos',
            email: '2-4 horas hábiles',
            teams: '15-30 minutos',
            emergency: 'Inmediato (24/7)',
            mentor: '1-2 horas hábiles'
        },
        
        // Horarios de atención
        officeHours: {
            mentors: 'Lunes a Viernes: 8:00 AM - 5:00 PM',
            support: 'Lunes a Viernes: 7:00 AM - 7:00 PM',
            emergency: '24/7 (solo WhatsApp emergency)',
            meetings: {
                daily: '9:30 AM - Sala QA-101',
                weekly: 'Viernes 9:00 AM - Revisión general',
                onboarding: 'Lunes 10:00 AM - Sesión inicial'
            }
        },
        
        // Ubicación física (si aplica)
        location: {
            office: 'Carrera 45 # 26-85, Piso 3',
            city: 'Bogotá, Colombia',
            floor: 'Piso 3 - Área QA',
            deskPrefix: 'Escritorio QA-'
        }
    },
    // ============================================
    // ⭐⭐ FIN SECCIÓN CONTACTO ⭐⭐
    // ============================================
    
    // Preguntas frecuentes predefinidas
    faqs: [
        {
            question: '¿Cuál es el horario de trabajo?',
            answer: 'Lunes a viernes de 8:00 AM a 5:00 PM, con flexibilidad horaria.'
        },
        {
            question: '¿Dónde reporto un bug?',
            answer: 'En Azure DevOps → Tableros → Elementos de trabajo → Nuevo bug.'
        }
    ],
    
    // Configuración general
    settings: {
        appName: 'Inducción QA - Asistente SENA',
        companyName: '[NOMBRE DE TU EMPRESA]',
        welcomeMessage: '¡Bienvenido/a al equipo de Control de Calidad!',
        supportEmail: 'soporte.qa@tuempresa.com',
        version: '1.0.0',
        releaseDate: '2024-01-01',
        showEmergencyButton: true,
        enableWhatsApp: true,
        enableTeams: true,
        autoDetectFrustration: true
    }
};

// Para uso en Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}

// Para uso en navegador
if (typeof window !== 'undefined') {
    window.CONFIG = CONFIG;
}