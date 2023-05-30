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

				const html = updateImageReferences("<p>La mission : <br>\nVous travaillez pour le département technologique d’une grande société financière, WealthHealth. Cette société utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L’application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne. Votre équipe de développement s’efforce depuis un certain temps déjà de mettre à niveau l’application.</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/P14_OpenClassrooms_WealthHealth\">https://github.com/vypnico974/P14_OpenClassrooms_WealthHealth</a></p>");

				const frontmatter = {"title":"Projet 14 - OPENCLASSROOMS","publishDate":"2023-05-24T00:00:00.000Z","img":"/assets/P14_1.png","img_alt":"Projet 14 - OPENCLASSROOMS.","description":"Faites passer une librairie jQuery vers React\n","tags":["JQuery","REACT","REDUX"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P13-OC.md";
				const url = undefined;
				function rawContent() {
					return "\nLa mission : <br>\n Vous travaillez pour le département technologique d'une grande société financière, WealthHealth. Cette société utilise une application web interne, appelée HRnet, qui gère les dossiers des employés. L'application est ancienne et utilise jQuery côté front end, ce qui entraîne des bugs considérables et une augmentation des plaintes en interne. Votre équipe de développement s'efforce depuis un certain temps déjà de mettre à niveau l'application.\n\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/P14_OpenClassrooms_WealthHealth\n\n\n";
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
