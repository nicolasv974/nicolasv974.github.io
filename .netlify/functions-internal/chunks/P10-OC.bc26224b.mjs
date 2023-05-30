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

				const html = updateImageReferences("<p>La mission :<br>\nus avez intégré Ohmyfood en tant que développeur junior. Il s’agit d’une jeune startup qui voudrait s’imposer sur le marché de la restauration. Déjà présente à New-York, elle souhaite désormais faire sa place à Paris.<br>\nVotre mission est de développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d’attente au restaurant !</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/Projet-3-openClassrooms\">https://github.com/vypnico974/Projet-3-openClassrooms</a></p>");

				const frontmatter = {"title":"Projet 3 - OPENCLASSROOMS","publishDate":"2023-05-05T00:00:00.000Z","img":"/assets/P03_1.png","img_alt":"Projet 03 - OPENCLASSROOMS.","description":"Dynamisez une page web avec des animations CSS.","tags":["Saas"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P10-OC.md";
				const url = undefined;
				function rawContent() {
					return "\nLa mission :<br>\nus avez intégré Ohmyfood en tant que développeur junior. Il s’agit d’une jeune startup qui voudrait s'imposer sur le marché de la restauration. Déjà présente à New-York, elle souhaite désormais faire sa place à Paris.<br>\nVotre mission est de développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques. En plus des systèmes classiques de réservation, les clients pourront composer le menu de leur repas pour que les plats soient prêts à leur arrivée. Finis, les temps d'attente au restaurant !\n\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/Projet-3-openClassrooms\n";
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
