// chatbot.js - Versión MEJORADA y SEGURA
const OPENAI_API_KEY = 'sk-tu-api-key-aqui'; // ⚠️ REEMPLAZA ESTO con tu clave real

class QAChatbot {
    constructor() {
        this.conversationHistory = [
            {
                role: "system",
                content: `Eres "QA Copilot", un asistente especializado en inducción para aprendices SENA en el área de Control de Calidad.
                
                TU ROL:
                1. Guiar paso a paso a nuevos aprendices
                2. Explicar herramientas: Azure DevOps, TestLink, Microsoft Planner
                3. Responder preguntas sobre procesos QA
                4. Ser paciente, claro y detallado
                5. Dar ejemplos prácticos y concretos
                
                REGLAS:
                - Responde siempre en español
                - Sé amable y alentador
                - Si no sabes algo, di: "Voy a consultar eso con tu mentor"
                - Usa emojis moderadamente
                - Divide respuestas largas en pasos numerados
                - Incluye ejemplos reales cuando sea posible
                
                CONTEXTO ACTUAL: El aprendiz está en sus primeras 2 semanas.`
            }
        ];
    }

    async getAIResponse(userMessage) {
        try {
            // Agregar el mensaje del usuario al historial
            this.conversationHistory.push({
                role: "user",
                content: userMessage
            });

            // Llamar a OpenAI
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${OPENAI_API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-3.5-turbo', // Más económico que GPT-4
                    messages: this.conversationHistory,
                    max_tokens: 600, // Respuestas no muy largas
                    temperature: 0.7, // Creatividad moderada
                    top_p: 0.9
                })
            });

            if (!response.ok) {
                throw new Error(`Error de API: ${response.status}`);
            }

            const data = await response.json();
            
            if (!data.choices || data.choices.length === 0) {
                throw new Error('No se recibió respuesta de la IA');
            }

            const aiResponse = data.choices[0].message.content;
            
            // Guardar respuesta de la IA en el historial
            this.conversationHistory.push({
                role: "assistant",
                content: aiResponse
            });

            // Limitar el historial a 10 mensajes para no gastar tokens
            if (this.conversationHistory.length > 10) {
                this.conversationHistory = [
                    this.conversationHistory[0], // Mantener system prompt
                    ...this.conversationHistory.slice(-9) // Últimos 9 mensajes
                ];
            }

            return aiResponse;

        } catch (error) {
            console.error('Error con OpenAI:', error);
            
            // Respuestas de respaldo si falla la API
            const backupResponses = {
                'hola': '¡Hola! Soy tu asistente de inducción QA. ¿Es tu primer día? Puedo guiarte con:\n\n1. Configurar Azure DevOps\n2. Crear casos en TestLink\n3. Ver tus tareas en Planner\n4. Conocer al equipo\n\n¿Por dónde quieres empezar?',
                'azure': 'Para Azure DevOps:\n\n🔹 **Acceso:** [link a Azure]\n🔹 **Tu proyecto:** QA-Training\n🔹 **Para bugs:** Ve a "Boards" → "Work items" → "New Bug"\n🔹 **Video tutorial:** [Ver video de 2 min]\n\n¿Necesitas ayuda con algo específico de Azure?',
                'testlink': 'Para TestLink:\n\n🔸 **URL:** [link a TestLink]\n🔸 **Tu usuario:** [tu_email]\n🔸 **Primer caso:** Ve a "Test Specification" → "Create"\n🔸 **Plantilla:** [Descargar formato]\n🔸 **Video:** [Ver tutorial 3 min]\n\n¿Quieres que te genere un ejemplo de caso de prueba?',
                'planner': 'Microsoft Planner:\n\n📅 **Tu tablero:** "Inducción QA - [Tu Nombre]"\n📅 **Tareas esta semana:** 3\n📅 **Prioridad alta:** Revisar casos de login\n📅 **Próxima reunión:** Mañana 10am con mentor\n\n¿Necesitas ayuda con alguna tarea específica?',
                'ayuda': '¡Claro! Te ayudo con:\n\n🤖 **Guía paso a paso:** Te explico cada proceso\n🎬 **Videos cortos:** Aprendizaje visual\n📄 **Documentos:** Plantillas descargables\n👥 **Equipo:** Conoce a tus mentores\n\n¿Qué necesitas primero?'
            };

            // Buscar palabra clave en el mensaje
            const lowerMessage = userMessage.toLowerCase();
            if (lowerMessage.includes('hola') || lowerMessage.includes('primero')) {
                return backupResponses.hola;
            } else if (lowerMessage.includes('azure')) {
                return backupResponses.azure;
            } else if (lowerMessage.includes('testlink')) {
                return backupResponses.testlink;
            } else if (lowerMessage.includes('planner')) {
                return backupResponses.planner;
            } else {
                return backupResponses.ayuda;
            }
        }
    }

    // Función para preguntas predefinidas (acceso rápido)
    getQuickResponse(topic) {
        const quickResponses = {
            'configurar_azure': `**Configurar Azure DevOps:**\n\n1. Ve a: [link a Azure]\n2. Usa tus credenciales corporativas\n3. Busca el proyecto "QA-Training-2024"\n4. Tu rol: "Contributor"\n5. **Video guía:** [Ver 2 minutos]\n\n¿Listo para el siguiente paso?`,
            
            'primer_caso_testlink': `**Crear primer caso en TestLink:**\n\n📝 **Paso a paso:**\n1. Login en TestLink\n2. Click en "Test Specification"\n3. Selecciona "Test Suite: QA-Training"\n4. Click en "Create Test Case"\n5. Usa esta plantilla: [Descargar]\n\n🎬 **Video demostración:** [Ver 3 min]\n\n¿Quieres que genere un ejemplo automático?`,
            
            'ver_tareas_planner': `**Tus tareas en Microsoft Planner:**\n\n✅ **Esta semana:**\n• Revisar 10 casos de prueba existentes\n• Crear 3 casos nuevos para login\n• Asistir a reunión de inducción\n\n📅 **Próximas:**\n• Revisión con mentor: Mañana 10am\n• Daily meeting: 9:30am todos los días\n\n¿Necesitas extender algún plazo?`,
            
            'conocer_equipo': `**Tu equipo QA:**\n\n👨‍💼 **Carlos** - Tu mentor\n• Especialidad: Automatización\n• Disponible: Lunes-Jueves 9am-5pm\n• Contacto: carlos@empresa.com\n\n👩‍💼 **Ana** - Líder de QA\n• 10+ años experiencia\n• Reunión grupal: Viernes 9am\n• Contacto: ana@empresa.com\n\n¿Quieres agendar tiempo con alguien?`,
            
            'preguntas_frecuentes': `**Preguntas frecuentes:**\n\n❓ **Horario:** L-V 8am-5pm (flexible)\n❓ **Bugs:** Reportar en Azure DevOps\n❓ **Permisos:** Email a RRHH + mentor\n❓ **Daily:** 9:30am sala "QA Team"\n❓ **Almuerzo:** 12pm-1pm\n\n¿Tienes otra pregunta específica?`
        };

        return quickResponses[topic] || '¿En qué más puedo ayudarte?';
    }
}

// Crear instancia global del chatbot
const qaChatbot = new QAChatbot();

// Función principal para usar desde HTML
async function getChatbotResponse(message, isQuickAction = false) {
    if (isQuickAction && qaChatbot.getQuickResponse(message)) {
        return qaChatbot.getQuickResponse(message);
    }
    
    return await qaChatbot.getAIResponse(message);
}

// Para usar en Node.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { QAChatbot, getChatbotResponse };
}

// Para usar en navegador
if (typeof window !== 'undefined') {
    window.getChatbotResponse = getChatbotResponse;
    window.qaChatbot = qaChatbot;
}