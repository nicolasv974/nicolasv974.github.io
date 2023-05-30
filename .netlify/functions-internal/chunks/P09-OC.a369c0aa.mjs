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

				const html = updateImageReferences("<p>La mission :<br>\nVous débutez votre alternance en tant que développeur web au sein de la start-up Booki. .<br>\nL’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.</p>\n<p>Vous êtes chargé d’intégrer l’interface du site avec du code HTML et CSS. Pour cela, vous travaillez en étroite collaboration avec Sarah, la CTO, et Loïc, l’UI designer.</p>\n<p>Sarah vous envoie un e-mail pour vous présenter l’avancée du projet.</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/Projet-2-openClassrooms\">https://github.com/vypnico974/Projet-2-openClassrooms</a></p>");

				const frontmatter = {"title":"Projet 02 - OPENCLASSROOMS","publishDate":"2023-05-04T01:02:00.000Z","img":"/assets/P02_1.png","img_alt":"Projet 02 - OPENCLASSROOMS.","description":"Transformez une maquette en site web avec HTML & CSS.","tags":["HTML","CSS"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P09-OC.md";
				const url = undefined;
				function rawContent() {
					return "\nLa mission :<br>\nVous débutez votre alternance en tant que développeur web au sein de la start-up Booki. .<br>\nL’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix.\n\nVous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS. Pour cela, vous travaillez en étroite collaboration avec Sarah, la CTO, et Loïc, l’UI designer. \n\nSarah vous envoie un e-mail pour vous présenter l’avancée du projet.\n\n\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/Projet-2-openClassrooms\n";
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
