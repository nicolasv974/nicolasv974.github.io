import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    // Autres configurations...

    routes: [
        {
            path: '/api/contact', // L'URL de la page du formulaire
            load: '/pages/contact.astro' // L'emplacement du fichier Astro correspondant
        },
        // Autres routes...
    ]
});
