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

				const html = updateImageReferences("<p>La mission :<br>\r\nVous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif. En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/P12_OpenClassrooms_SportSee\">https://github.com/vypnico974/P12_OpenClassrooms_SportSee</a></p>");

				const frontmatter = {"title":"Projet 12 - OPENCLASSROOMS","publishDate":"2023-05-07T10:01:00.000Z","img":"/assets/P12_1.png","img_alt":"Projet 12 - OPENCLASSROOMS.","description":"Développez un tableau de bord d'analytics avec React.","tags":["REACT","REDUX","AXIOS","RECHARTS"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P07-OC.md";
				const url = undefined;
				function rawContent() {
					return "\r\nLa mission :<br>\r\nVous travaillez en tant que développeur chez SportSee, une startup dédiée au coaching sportif. En pleine croissance, l’entreprise va aujourd’hui lancer une nouvelle version de la page profil de l’utilisateur. Cette page va notamment permettre à l’utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.\r\n\r\n\r\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/P12_OpenClassrooms_SportSee\r\n";
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
