"use client";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { subclip } from "three/src/animation/AnimationUtils";

i18n
  .use(LanguageDetector) // rileva lingua dal browser o localStorage
  .use(initReactI18next)
  .init({
    resources: {
      EN: {
        translation: {
          navbar: { about: "About", projects: "Projects", contact: "Contact" },

          about: { bio: "I am Giulia Nicotra, a digital media artist whose work operates in the \"gray zone\" at the intersection of art and technology. My work explores the relationship between sound, movement, and technology, with a particular focus on the sonification of motion and the real-time transformation of movement data into soundscapes and images. With a background in multimedia installations, set design, and performance, I have presented my projects at the Torino Film Industry, Recontemporary, and the Mirabilia Festival. I am currently pursuing a Master's degree in Cinema and Digital Media Engineering at the Polytechnic University of Turin.", cv: "View my CV here", cvHref: "/nicotragiuliacv_eng.pdf" },

          projects: {
            project1: {
              title: "Sound Choreographies",
              subtitle: "2024-25, StudiumLab - University of Turin. Bachelor's degree research project. \nSoftware: Unreal Engine, Xsens MVN Animate.",
              description:
                "This research explores movement-based sound synthesis within Unreal Engine, focusing on the real-time translation of motion data into procedural audio. The project investigates new methods of linking physical movement, captured through motion-tracking technologies, to sound parameters, enabling the creation of expressive and interactive digital soundscapes. Body data is translated in real time into musical parameters such as pitch, timbre, and spatialization. By connecting performance, sound design, and immersive media, this work aims to develop innovative compositional strategies that expand the possibilities of interactive audio systems. The project has been published on the Unreal Engine Developer Community, where I created a tutorial to share the workflow with other artists and developers.",
              tutorial: "You can find the tutorial here",
            },
            project2: {
              description:
                "As part of this research, a first prototype was <em>AR/kè</em>, a collective project created during the Live Performance for XR workshop led by the British duo Gibson & Martelli at the University of Turin. The performance, produced by Officine Sintetiche with the support of Fondazione CRT and the academic supervision of Letizia Gioia Monda and Antonio Pizzo, involved students from DAMS and CAM at the University of Turin, Cinema and Media Engineering at Politecnico di Torino, and New Technologies of Art at the Accademia Albertina di Belle Arti. <em>AR/kè</em> explored the relationship between body, sound, and virtual environment in real time, reinterpreting the atmosphere of the silent film Cabiria (1914) through motion capture, sound design, and interactive immersive environments.",
              listItems: [
                "Presented at Torino Film Industry 2024",
                "Presented at Mirabilia International Circus & Performing Arts Festival 2025 (Cuneo)",
              ],
            },
            project3: {
              subtitle: "2024, University of Turin. \nSoftware: TouchDesigner, Adobe Premiere Pro, Isadora. \nProject by: Rebecca Castagna, Giulia Nicotra, Cecilia Spina.",
              description: "<em>Oltre l’intreccio della mente</em> (<em>Beyond the tangle of the mind</em>) is an installation with a live performance that uses video mapping to create an immersive and profound experience on the theme of mental health. The artistic intention is to metaphorically translate the self-imposed limits of the mind into a physical cage made of an entangled red thread. The stage space, consisting of a semi-transparent fabric structure, serves both as a projection surface and as a permeable barrier between the performer and the audience, who are invited to freely explore the installation. I was responsible for both the creative and technical direction of the project, including stage design, video mapping, lighting, and the overall technical setup.",
              listItems: [
                "Presented at \"Arti Performative Digitali a Palazzo Nuovo\" 2024 (Turin)",
                "Presented at Mirabilia International Circus & Performing Arts Festival 2024 (Cuneo)",
              ],
            },
            project4: {
              title: "Synthetic Sound Generator",
              description:
                "An experimental generative sound engine built in SuperCollider, designed to create synthetic soundscapes using procedural synthesis techniques. The system includes four different synthesized instruments, each with unique waveform modulation, frequency filters, and dynamic amplitude controls. Users can manipulate sound parameters in real-time through an interactive GUI, adjusting volume levels and triggering generative routines that play autonomously.",
            },
            othproj1: {
              title: "Re-Ca(be)ria",
              subtitle: "2024.\nSoftware: TouchDesigner.",
              description: "The project, created with two other students from the University of Turin, is a VR reinterpretation of Cabiria (1914), transforming the third chapter into an interactive 3D experience with motion-tracked environments, avatars, and soundscapes."
            },
            othproj2: {
              subtitle: "2023.\nSoftware: Adobe Premiere Pro, Adobe After Effects, Audacity. \nProject by: Giulia Nicotra, Carolina Bonomi, Roberta Camanni.",
              description: "A stop-motion video art project that investigates social alienation and technological dependence, featuring a protagonist whose environment becomes increasingly autonomous, leading her to a surreal crescendo of self-annihilation.",
            },
            othproj3: {
              subtitle: "2023.\nSoftware: Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop.",
              description: "<em>Argerich</em> is the music video for the electropop song by Valentina Marcellino. The concept is inspired by the lyrics: plants as a symbol of escape and self-discovery. The video combines live footage with digital animations and archival materials, creating a hybrid and surreal visual universe."
            }
          },

          contact: {
            interested: "Interested in working together?",
            emailMe: "Email me",
          },
        },
      },
      IT: {
        translation: {
          navbar: { about: "Bio", projects: "Progetti", contact: "Contatti" },


          about: { bio: "Sono Giulia Nicotra, un'artista di media digitali il cui lavoro si concentra sull'intersezione tra arte e tecnologia. che opera nella \"gray zone\" all'incrocio tra arte e tecnologia. Il mio lavoro esplora l'intersezione tra suono, movimento e tecnologia, con un particolare interesse per la sonificazione del movimento e la trasformazione in tempo reale di dati di movimento in paesaggi sonori e immagini. Con un background in installazioni multimediali, scenografia e performance, ho presentato i miei progetti al Torino Film Industry, Recontemporary e al Mirabilia Festival. Sto attualmente conseguendo una laurea magistrale in Ingegneria del Cinema e dei Media Digitali al Politecnico di Torino.", cv: "Qui il mio CV", cvHref: "/nicotragiuliacv_ita.pdf" },

          projects: {
            project1: {
              title: "Coreografie Sonore",
              subtitle: "2024-25, StudiumLab - Università di Torino. Progetto di ricerca di laurea triennale. \nSoftware: Unreal Engine, Xsens MVN Animate.",
              description:
                "Questa ricerca esplora la sintesi sonora basata sul movimento all'interno di Unreal Engine, concentrandosi sulla traduzione dei dati di movimento in generazione audio procedurale. Il progetto indaga nuovi metodi per collegare il movimento fisico, catturato tramite tecnologie di motion-tracking, ai parametri sonori, consentendo la creazione di paesaggi sonori digitali espressivi e interattivi. I dati del corpo vengono tradotti in tempo reale in parametri musicali: altezza, timbro e spazializzazione. Collegando performance, sound design e media immersivi, questo lavoro mira a sviluppare strategie compositive innovative che espandono le possibilità dei sistemi audio interattivi. È stata pubblicata sulla Unreal Engine Developer Community, dove ho creato un tutorial per condividere il flusso di lavoro con altri artisti e sviluppatori.",
              tutorial: "Puoi trovare il tutorial qui"
            },
            project2: {
              description:
                "Nel contesto di questa ricerca, un primo sviluppo concreto è stato <em>AR/kè</em>, un progetto collettivo nato durante il workshop Live Performance for XR condotto dal duo britannico Gibson & Martelli presso l’Università di Torino. La performance, prodotta da Officine Sintetiche con il supporto della Fondazione CRT e la supervisione accademica di Letizia Gioia Monda e Antonio Pizzo, ha coinvolto studenti e studentesse provenienti da DAMS e CAM dell’Università di Torino, da Ingegneria del Cinema e dei Mezzi di Comunicazione del Politecnico di Torino e da Nuove Tecnologie dell’Arte dell’Accademia Albertina di Belle Arti. <em>AR/kè</em> ha esplorato la relazione tra corpo, suono e ambiente virtuale in tempo reale, reinterpretando le atmosfere del film muto Cabiria (1914) attraverso motion capture, sound design e ambienti immersivi interattivi.",
              listItems: [
                "Presentato al Torino Film Industry 2024",
                "Presentato al Mirabilia International Circus & Performing Arts Festival 2025 (Cuneo)",
              ]
            },
            project3: {
              subtitle: "2024, Università di Torino. \nSoftware: TouchDesigner, Adobe Premiere Pro, Isadora. \nProgetto a cura di: Rebecca Castagna, Giulia Nicotra, Cecilia Spina.",
              description: "<em>Oltre l'intreccio della mente</em> è un'installazione con performance dal vivo che utilizza il video mapping per creare un'esperienza immersiva e profonda sul tema della salute mentale. L'intento artistico è quello di tradurre metaforicamente i limiti autoimposti della mente in una gabbia fisica creata con un groviglio di filo rosso. Lo spazio scenico, costituito da una struttura di tessuto semi-trasparente, serve sia da superficie di proiezione che da barriera permeabile tra il performer e il pubblico, che è invitato a esplorare l'installazione liberamente. Mi sono occupata della direzione creativa e tecnica del progetto, inclusa la scenografia, il video mapping, l'illuminazione e l'allestimento tecnico complessivo.",
              listItems: [
                "Presentato ad \"Arti Performative Digitali a Palazzo Nuovo\" 2024 (Torino)",
                "Presentato al Mirabilia International Circus & Performing Arts Festival 2024 (Cuneo)",
              ]
            },
            project4: {
              title: "Synthetic Sound Generator",
              description:
                "Un motore sonoro generativo sperimentale realizzato in SuperCollider, progettato per creare paesaggi sonori sintetici utilizzando tecniche di sintesi procedurale. Il sistema include quattro diversi strumenti sintetizzati, ciascuno con modulazione di forma d'onda, filtri di frequenza e controlli di ampiezza dinamici unici. Gli utenti possono manipolare i parametri sonori in tempo reale tramite un'interfaccia grafica (GUI) interattiva, regolando i livelli di volume e attivando routine generative che suonano in autonomia.",
            },
            othproj1: {
              title: "Re-Ca(be)ria",
              subtitle: "2024.\nSoftware: TouchDesigner.",
              description: "Il progetto, realizzato con altri due studenti dell'Università di Torino, è una reinterpretazione in VR di Cabiria (1914), che trasforma il terzo capitolo in un’esperienza 3D interattiva con ambienti tracciati dal movimento, avatar e paesaggi sonori."
            },
            othproj2: {
              subtitle: "2023.\nSoftware: Adobe Premiere Pro, Adobe After Effects, Audacity. \nProgetto a cura di: Giulia Nicotra, Carolina Bonomi, Roberta Camanni.",
              description: "Un progetto video artistico in stop-motion che indaga l’alienazione sociale e la dipendenza tecnologica, con una protagonista il cui ambiente diventa sempre più autonomo, conducendola a un crescendo surreale di auto-annientamento."
            },
            othproj3: {
              subtitle: "2023. \nSoftware: Adobe Premiere Pro, Adobe After Effects, Adobe Photoshop.",
              description: "<em>Argerich</em> è il videoclip musicale del brano elettropop di Valentina Marcellino. Il concept prende spunto dal testo: le piante come simbolo di fuga e auto-scoperta. Il video unisce riprese live con animazioni digitali e materiali d'archivio, creando un universo visivo ibrido e surreale."
            }
          },

          contact: {
            interested: "Vuoi creare qualcosa insieme?",
            emailMe: "Scrivimi",
          },
        },
      },
    },
    fallbackLng: "EN",
    interpolation: { escapeValue: false },
  });

export default i18n;