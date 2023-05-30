import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.c2cdbe23.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.96349085.mjs';
import { $ as $$ContactCTA } from './_...slug_.astro.18fb9c83.mjs';
/* empty css                           */import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           *//* empty css                               */
const $$Astro = createAstro();
const $$About = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "About | Jeanine White", "description": "About Jeanine White Lorem Ipsum", "class": "astro-KH7BTL4R" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-KH7BTL4R">
		<main class="wrapper about astro-KH7BTL4R">
			<!-- <Hero
				title="About"
				tagline="Thanks for stopping by. Read below to learn more about myself and my background."
			> -->
			${renderComponent($$result2, "Hero", $$Hero, { "title": "Mon parcours", "tagline": "Exp\xE9riences professionnelles, dipl\xF4mes et comp\xE9tences.", "class": "astro-KH7BTL4R" }, { "default": ($$result3) => renderTemplate`
				<img width="1553" height="873" src="/assets/article-kais-grand.jpg" alt="Nicolas Vyplasil" class="astro-KH7BTL4R">
			` })}

			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Expériences professionnelles</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">
						J'ai été militaire, de spécialité informatique dans la Marine Nationale pendant une vingtaine d'années.<br class="astro-KH7BTL4R">
						J'ai eu l'opportunité d'acquérir de nombreuses connaissances : <br class="astro-KH7BTL4R">
						- administrateur de parc informatique (Windows et Linux) <br class="astro-KH7BTL4R">
						- administrateur de base de données (Sybase)  <br class="astro-KH7BTL4R">
						- conception, installation et maintenance d'un site web opérationnel (html, js, php, java) <br class="astro-KH7BTL4R">
						- développeur SAP <br class="astro-KH7BTL4R">
					</p>
				</div>
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Diplômes</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">Formation OPENCLASSROOMS "Développeur d'application - JavaScript React". (équivalent bac 3/4) </p>
					<p class="astro-KH7BTL4R">Certificat professionnel de télécommunication à l'école naval de Toulon . (équivalent bac 2) </p>
					<p class="astro-KH7BTL4R">Certificat de programmateur  informatique  à l'école inter-armée des transmissions de Rennes. </p>
					<p class="astro-KH7BTL4R">BAC PRO MAVALEC (maintenance de l'audiovisuelle électronique).</p>
					<p class="astro-KH7BTL4R">BEP Electronique. </p>
				</div>

				
			</section>
			<section class="astro-KH7BTL4R">
				<h2 class="section-title astro-KH7BTL4R">Compétences</h2>
				<div class="content astro-KH7BTL4R">
					<p class="astro-KH7BTL4R">Rigeur, polyvalent, curieux, autonome. </p>
					<p class="astro-KH7BTL4R">Travail en équipe.</p>
				</div>
			</section>
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-KH7BTL4R" })}
	</div>
` })}`;
}, "C:/Z_projet/Porfolio_astro/src/pages/about.astro");

const $$file = "C:/Z_projet/Porfolio_astro/src/pages/about.astro";
const $$url = "/about";

export { $$About as default, $$file as file, $$url as url };
