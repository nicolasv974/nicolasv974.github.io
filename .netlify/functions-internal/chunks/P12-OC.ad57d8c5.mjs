import { k as createVNode, F as Fragment, s as spreadAttributes } from './astro.c2cdbe23.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';

const images = {
					
				};

				function updateImageReferences(html) {
					return html.replaceAll(
						/__ASTRO_IMAGE_="(.+)"/gm,
						(full, imagePath) => spreadAttributes({src: images[imagePath].src, ...images[imagePath].attributes})
					);
				}

				const html = updateImageReferences("<p>La mission :<br>\nVous êtes freelance et vous venez d’être missionné par l’entreprise “Les petits plats” en temps que Développeur Front-end pour une mission de 3 mois.<br>\nAprès avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g. les sites offrant des recettes de cuisine sont nombreux et l’équipe a pensé que l’un des éléments qui peuvent faire la différence sur notre site est la fluidité du moteur de recherche.</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/P7-Les-Petits-Plats-OpenClassroom\">https://github.com/vypnico974/P7-Les-Petits-Plats-OpenClassroom</a></p>");

				const frontmatter = {"title":"Projet 7 - OPENCLASSROOMS","publishDate":"2023-05-05T23:00:01.000Z","img":"/assets/P07_1.png","img_alt":"Projet 07 - OPENCLASSROOMS.","description":"Développez un algorithme de recherche en JavaScript.","tags":["React","Jest"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P12-OC.md";
				const url = undefined;
				function rawContent() {
					return "\nLa mission :<br>\nVous êtes freelance et vous venez d’être missionné par l’entreprise “Les petits plats” en temps que Développeur Front-end pour une mission de 3 mois.<br>\nAprès avoir édité des livres de cuisine pendant plusieurs années, l’entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l’instar de Marmiton ou 750g. les sites offrant des recettes de cuisine sont nombreux et l’équipe a pensé que l’un des éléments qui peuvent faire la différence sur notre site est la fluidité du moteur de recherche. \n\n\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/P7-Les-Petits-Plats-OpenClassroom\n";
				}
				function compiledContent() {
					return html;
				}
				function getHeadings() {
					return [];
				}
				async function Content() {
					const { layout, ...content } = frontmatter;
					content.file = file;
					content.url = url;
					const contentFragment = createVNode(Fragment, { 'set:html': html });
					return contentFragment;
				}
				Content[Symbol.for('astro.needsHeadRendering')] = true;

export { Content, compiledContent, Content as default, file, frontmatter, getHeadings, images, rawContent, url };
