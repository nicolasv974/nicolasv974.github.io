import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.c2cdbe23.mjs';
import { g as getCollection, a as $$Pill, $ as $$ContactCTA } from './_...slug_.astro.579a00f8.mjs';
import { $ as $$Icon, b as $$Hero, a as $$BaseLayout } from './404.astro.a1d1f1af.mjs';
/* empty css                           *//* empty css                           */
const $$Astro$3 = createAstro();
const $$Grid = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Grid;
  const { variant } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<ul${addAttribute([["grid", { offset: variant === "offset", small: variant === "small" }], "astro-VC5TSDMU"], "class:list")}>
	${renderSlot($$result, $$slots["default"])}
</ul>`;
}, "C:/Z_projet/Porfolio_astro/src/components/Grid.astro");

const $$Astro$2 = createAstro();
const $$PortfolioPreview = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$PortfolioPreview;
  const { data, slug } = Astro2.props.project;
  return renderTemplate`${maybeRenderHead($$result)}<a class="card astro-LGKM4U2A"${addAttribute(`/work/${slug}`, "href")}>
	<span class="title astro-LGKM4U2A">${data.title}</span>
	<img${addAttribute(data.img, "src")}${addAttribute(data.img_alt || "", "alt")} loading="lazy" decoding="async" class="astro-LGKM4U2A">
</a>`;
}, "C:/Z_projet/Porfolio_astro/src/components/PortfolioPreview.astro");

const $$Astro$1 = createAstro();
const $$Skills = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skills;
  return renderTemplate`${maybeRenderHead($$result)}<section class="box skills astro-AB4IHPZS">
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "terminal-window", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">DevOps</h2>
		<p class="astro-AB4IHPZS">Ayant la culture du DevOps, j'apprécie de suivre les projets jusqu'à la production.</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "trophy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Travail en équipe</h2>
		<p class="astro-AB4IHPZS">Travailler en équipe, conseiller et partager.</p>
	</div>
	<div class="stack gap-2 lg:gap-4 astro-AB4IHPZS">
		${renderComponent($$result, "Icon", $$Icon, { "icon": "strategy", "color": "var(--accent-regular)", "size": "2.5rem", "gradient": true, "class": "astro-AB4IHPZS" })}
		<h2 class="astro-AB4IHPZS">Vision à 360°</h2>
		<p class="astro-AB4IHPZS">Ayant une vingtaine d'années d'expérience, j'ai une vision globale des projets et des problèmatiques.</p>
	</div>
	<!-- <div class="stack gap-2 lg:gap-4">
		<Icon icon="terminal-window" color="var(--accent-regular)" size="2.5rem" gradient />
		<h2>Full Stack</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
	</div>
	<div class="stack gap-2 lg:gap-4">
		<Icon icon="trophy" color="var(--accent-regular)" size="2.5rem" gradient />
		<h2>Industry Leader</h2>
		<p>Neque viverra justo nec ultrices dui. Est ultricies integer quis auctor elit.</p>
	</div>
	<div class="stack gap-2 lg:gap-4">
		<Icon icon="strategy" color="var(--accent-regular)" size="2.5rem" gradient />
		<h2>Strategy-Minded</h2>
		<p>Urna porttitor rhoncus dolor purus non enim praesent ornare.</p>
	</div> -->
</section>`;
}, "C:/Z_projet/Porfolio_astro/src/components/Skills.astro");

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const projects = (await getCollection("work")).sort((a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()).slice(0, 11);
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "class": "astro-J7PV25F6" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 lg:gap-48 astro-J7PV25F6">
		<div class="wrapper stack gap-8 lg:gap-20 astro-J7PV25F6">
			<header class="hero astro-J7PV25F6">
				<!-- <Hero
					title="Hello, my name is Jeanine White"
					tagline="I am a Creative Developer who is currently based in Portland, Oregon."
					align="start"
				> -->
				${renderComponent($$result2, "Hero", $$Hero, { "title": "Nicolas Vyplasil", "align": "start", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`
					
					<div class="roles astro-J7PV25F6">
						${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-J7PV25F6" }, { "default": ($$result4) => renderTemplate`${renderComponent($$result4, "Icon", $$Icon, { "icon": "code", "size": "1.33em", "class": "astro-J7PV25F6" })} Développeur Back-End et Front-End` })}
						<!-- <Pill><Icon icon="rocket-launch" size="1.33em" /> Speaker</Pill>
						<Pill><Icon icon="pencil-line" size="1.33em" /> Writer</Pill> -->
					</div>
				` })}

				<!-- <img
					alt="Jeanine White smiling in a red plaid shirt and tortoise shell glasses"
					width="480"
					height="620"
					src="/assets/portrait.jpg"
				/> -->
				<img alt="Nicolas Vyplasil" width="240" height="240" src="/assets/portrait.jpg" class="astro-J7PV25F6">
			</header>

			${renderComponent($$result2, "Skills", $$Skills, { "class": "astro-J7PV25F6" })}
		</div>

		<main class="wrapper stack gap-20 lg:gap-48 astro-J7PV25F6">
			<section class="section with-background with-cta astro-J7PV25F6">
				<header class="section-header stack gap-2 lg:gap-4 astro-J7PV25F6">
					<h3 class="astro-J7PV25F6">Mes derniers projets</h3>
					<p class="astro-J7PV25F6">Découvrez mes derniers projets, réalisées dans le cadre de la formation
						OPENCLASSROOMS "Développeur d'application - JavaScript React" d'une durée
						de 14 mois.</p>
				</header>

				<div class="gallery astro-J7PV25F6">
					${renderComponent($$result2, "Grid", $$Grid, { "variant": "offset", "class": "astro-J7PV25F6" }, { "default": ($$result3) => renderTemplate`${projects.map((project) => renderTemplate`<li class="astro-J7PV25F6">
									${renderComponent($$result3, "PortfolioPreview", $$PortfolioPreview, { "project": project, "class": "astro-J7PV25F6" })}
								</li>`)}` })}
				</div>

				<!-- <div class="cta">
					<CallToAction href="/work/">
						Plus de projets
						<Icon icon="arrow-right" size="1.2em" />
					</CallToAction>
				</div> -->
			</section>

			<!-- <section class="section with-background bg-variant">
				<header class="section-header stack gap-2 lg:gap-4">
					<h3>Mentions</h3>
					<p>
						I have been fortunate enough to recieve praise for my work in several publications. Take
						a look below to learn more.
					</p>
				</header>

				<div class="gallery">
					<Grid variant="small">
						{
							['Medium', 'BuzzFeed', 'The Next Web', 'awwwards.', 'TechCrunch'].map((brand) => (
								<li class="mention-card">
									<p>{brand}</p>
								</li>
							))
						}
					</Grid>
				</div>
			</section> -->
		</main>

		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-J7PV25F6" })}
	</div>
` })}`;
}, "C:/Z_projet/Porfolio_astro/src/pages/index.astro");

const $$file = "C:/Z_projet/Porfolio_astro/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$Grid as $, $$PortfolioPreview as a, index as i };
