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

				const html = updateImageReferences("<p>La mission :<br>\nVous avez récemment été embauché comme développeur Front-End junior dans une PME, GameOn, spécialisée dans les conférences et les concours de jeux. Vous avez fait du shadowing de votre développeur principal, Erika, pour suivre son travail au quotidien.<br>\nNous avons simplifié la nouvelle page d’accueil et l’inscription aux concours après avoir reçu des commentaires négatifs de la part de certains utilisateurs. Jason a travaillé dessus, mais malheureusement, il n’a pas eu le temps de terminer avant de partir pour son nouveau poste dans sa nouvelle entreprise. J’aurai besoin que tu prennes le relais et que tu complètes la partie Front-End.</p>\n<p>Pour plus d’information sur la demande et la présentation de la solution technique, dépôt GITHUB : <a href=\"https://github.com/vypnico974/P4-GameOn-website-FR\">https://github.com/vypnico974/P4-GameOn-website-FR</a></p>");

				const frontmatter = {"title":"Projet 4 - OPENCLASSROOMS","publishDate":"2023-05-04T06:01:00.000Z","img":"/assets/P04_1.png","img_alt":"Projet 04 - OPENCLASSROOMS.","description":"Créez une landing page avec Javascript.","tags":["Javascript"]};
				const file = "C:/Z_projet/Porfolio_astro/src/content/work/P03-OC.md";
				const url = undefined;
				function rawContent() {
					return "\nLa mission :<br>\nVous avez récemment été embauché comme développeur Front-End junior dans une PME, GameOn, spécialisée dans les conférences et les concours de jeux. Vous avez fait du shadowing de votre développeur principal, Erika, pour suivre son travail au quotidien.<br>\nNous avons simplifié la nouvelle page d'accueil et l'inscription aux concours après avoir reçu des commentaires négatifs de la part de certains utilisateurs. Jason a travaillé dessus, mais malheureusement, il n'a pas eu le temps de terminer avant de partir pour son nouveau poste dans sa nouvelle entreprise. J'aurai besoin que tu prennes le relais et que tu complètes la partie Front-End.\n\nPour plus d'information sur la demande et la présentation de la solution technique, dépôt GITHUB : https://github.com/vypnico974/P4-GameOn-website-FR\n";
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
