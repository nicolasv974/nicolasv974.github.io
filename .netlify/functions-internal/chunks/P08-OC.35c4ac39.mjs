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

				const html = updateImageReferences("<p>La mission :<br>\r\nLe site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/P11-openclassrooms-kasa\">https://github.com/vypnico974/P11-openclassrooms-kasa</a></p>");

				const frontmatter = {"title":"Projet 11 - OPENCLASSROOMS","publishDate":"2023-05-07T11:01:00.000Z","img":"/assets/P11_1.png","img_alt":"Projet 11 - OPENCLASSROOMS.","description":"Développez une application Web avec React et React Router.","tags":["REACT","FIGMA"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P08-OC.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLa mission :<br>\r\nLe site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET avec un code legacy important. Laura, la CTO, a donc lancé une refonte totale pour passer à une stack complète en JavaScript avec NodeJS côté Back-end, et React côté Front-end. Kasa en a également profité pour commander de nouvelles maquettes auprès de son designer habituel, qui est en freelance. Un gros chantier pour cette année \r\n\r\n\r\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/P11-openclassrooms-kasa\r\n\r\n\r\n";
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
