import { c as createAstro, a as createComponent, r as renderTemplate, d as renderComponent, m as maybeRenderHead } from '../astro.c2cdbe23.mjs';
import { g as getCollection, $ as $$ContactCTA } from './_...slug_.astro.18fb9c83.mjs';
import { b as $$Hero, a as $$BaseLayout } from './404.astro.96349085.mjs';
import { $ as $$Grid, a as $$PortfolioPreview } from './index.astro.147561a6.mjs';
import 'cookie';
import 'kleur/colors';
import 'slash';
import 'path-to-regexp';
import 'mime';
import 'string-width';
import 'html-escaper';
/* empty css                           *//* empty css                           *//* empty css                               *//* empty css                         *//* empty css                           *//* empty css                           *//* empty css                           */
const $$Astro = createAstro();
const $$Work = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Work;
  const projects = (await getCollection("work")).sort(
    (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
  );
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Mes projets | Nicolas Vyplasil", "description": "Mes projets les plus r\xE9cents." }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20">
		<main class="wrapper stack gap-8">
			${renderComponent($$result2, "Hero", $$Hero, { "title": "Mes projets", "tagline": "D\xE9couvrez mes projets les plus r\xE9cents ci-dessous pour avoir une id\xE9e de mon exp\xE9rience.", "align": "start" })}
			${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li>
							${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project })}
						</li>`)}` })}
		</main>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, {})}
	</div>
` })}`;
}, "C:/Z_projet/Porfolio_astro/src/pages/work.astro");

const $$file = "C:/Z_projet/Porfolio_astro/src/pages/work.astro";
const $$url = "/work";

export { $$Work as default, $$file as file, $$url as url };
