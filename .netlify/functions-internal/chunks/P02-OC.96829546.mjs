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

				const html = updateImageReferences("<p>La mission :<br>\nLearn@Home est une association qui met en relation des enfants en difficulté scolaire avec des tuteurs bénévoles. En gros, leur objectif est de permettre à tout élève, où qu’il soit, d’avoir accès à un soutien scolaire à distance. Ils nous ont confirmé qu’ils voulaient travailler avec nous sur leur projet de site web.</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/P10-OpenClassroom\">https://github.com/vypnico974/P10-OpenClassroom</a></p>");

				const frontmatter = {"title":"Projet 10 - OPENCLASSROOMS","publishDate":"2023-05-07T07:01:00.000Z","img":"/assets/P10_1.png","img_alt":"Projet 1O - OPENCLASSROOMS.","description":"Définissez les besoins pour une app de soutien scolaire.","tags":["Kanban","Figma","User Stories","Diagrammes de cas d’usage"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P02-OC.md";
				const url = undefined;
				function rawContent() {
					return "\nLa mission :<br>\nLearn@Home est une association qui met en relation des enfants en difficulté scolaire avec des tuteurs bénévoles. En gros, leur objectif est de permettre à tout élève, où qu’il soit, d’avoir accès à un soutien scolaire à distance. Ils nous ont confirmé qu’ils voulaient travailler avec nous sur leur projet de site web.\n\n\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/P10-OpenClassroom\n";
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
