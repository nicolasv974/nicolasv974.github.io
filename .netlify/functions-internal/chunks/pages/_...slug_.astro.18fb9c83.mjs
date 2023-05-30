import { g as createCollectionToGlobResultMap, h as createGetCollection, c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, f as renderSlot, d as renderComponent } from '../astro.c2cdbe23.mjs';
import { $ as $$Icon, a as $$BaseLayout, b as $$Hero } from './404.astro.96349085.mjs';
/* empty css                           *//* empty css                           *//* empty css                               */
// astro-head-inject

const contentDir = '/src/content/';

const contentEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/P01-OC.md": () => import('../P01-OC.f6ebc11d.mjs'),"/src/content/work/P02-OC.md": () => import('../P02-OC.fc7832a5.mjs'),"/src/content/work/P03-OC.md": () => import('../P03-OC.dc9caef8.mjs'),"/src/content/work/P07-OC.md": () => import('../P07-OC.52194ec2.mjs'),"/src/content/work/P08-OC.md": () => import('../P08-OC.9ae0f808.mjs'),"/src/content/work/P09-OC.md": () => import('../P09-OC.1b4fe23b.mjs'),"/src/content/work/P10-OC.md": () => import('../P10-OC.a732589a.mjs'),"/src/content/work/P11-OC.md": () => import('../P11-OC.1717d9c2.mjs'),"/src/content/work/P12-OC.md": () => import('../P12-OC.3d45ef2e.mjs'),"/src/content/work/P13-OC.md": () => import('../P13-OC.95977cec.mjs'),"/src/content/work/P14-OC.md": () => import('../P14-OC.0ee74623.mjs')

});
const contentCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: contentEntryGlob,
	contentDir,
});

const dataEntryGlob = /* #__PURE__ */ Object.assign({

});
const dataCollectionToEntryMap = createCollectionToGlobResultMap({
	globResult: dataEntryGlob,
	contentDir,
});
createCollectionToGlobResultMap({
	globResult: { ...contentEntryGlob, ...dataEntryGlob },
	contentDir,
});

let lookupMap = {};
lookupMap = {"work":{"type":"content","entries":{"p02-oc":"/src/content/work/P02-OC.md","p01-oc":"/src/content/work/P01-OC.md","p03-oc":"/src/content/work/P03-OC.md","p07-oc":"/src/content/work/P07-OC.md","p08-oc":"/src/content/work/P08-OC.md","p09-oc":"/src/content/work/P09-OC.md","p10-oc":"/src/content/work/P10-OC.md","p11-oc":"/src/content/work/P11-OC.md","p12-oc":"/src/content/work/P12-OC.md","p13-oc":"/src/content/work/P13-OC.md","p14-oc":"/src/content/work/P14-OC.md"}}};

function createGlobLookup(glob) {
	return async (collection, lookupId) => {
		const filePath = lookupMap[collection]?.entries[lookupId];

		if (!filePath) return undefined;
		return glob[collection][filePath];
	};
}

const renderEntryGlob = /* #__PURE__ */ Object.assign({"/src/content/work/P01-OC.md": () => import('../P01-OC.93d08aaa.mjs'),"/src/content/work/P02-OC.md": () => import('../P02-OC.35fa3b5a.mjs'),"/src/content/work/P03-OC.md": () => import('../P03-OC.db3d63e8.mjs'),"/src/content/work/P07-OC.md": () => import('../P07-OC.740978e7.mjs'),"/src/content/work/P08-OC.md": () => import('../P08-OC.db18d1ef.mjs'),"/src/content/work/P09-OC.md": () => import('../P09-OC.19cca13a.mjs'),"/src/content/work/P10-OC.md": () => import('../P10-OC.bceb234c.mjs'),"/src/content/work/P11-OC.md": () => import('../P11-OC.a8a17d9d.mjs'),"/src/content/work/P12-OC.md": () => import('../P12-OC.9c9af8ac.mjs'),"/src/content/work/P13-OC.md": () => import('../P13-OC.4e936261.mjs'),"/src/content/work/P14-OC.md": () => import('../P14-OC.0627540b.mjs')

});
const collectionToRenderEntryMap = createCollectionToGlobResultMap({
	globResult: renderEntryGlob,
	contentDir,
});

const getCollection = createGetCollection({
	contentCollectionToEntryMap,
	dataCollectionToEntryMap,
	getRenderEntryImport: createGlobLookup(collectionToRenderEntryMap),
});

const $$Astro$3 = createAstro();
const $$CallToAction = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CallToAction;
  const { href } = Astro2.props;
  return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")} class="astro-BALV45LP">${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Z_projet/Porfolio_astro/src/components/CallToAction.astro");

const $$Astro$2 = createAstro();
const $$Pill = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Pill;
  return renderTemplate`${maybeRenderHead($$result)}<div class="pill astro-2QEYWK4B">${renderSlot($$result, $$slots["default"])}</div>`;
}, "C:/Z_projet/Porfolio_astro/src/components/Pill.astro");

const $$Astro$1 = createAstro();
const $$ContactCTA = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ContactCTA;
  return renderTemplate`${maybeRenderHead($$result)}<aside class="astro-RCDZUQ3A">
	<h2 class="astro-RCDZUQ3A">Envie de travailler avec moi ?</h2>
	${renderComponent($$result, "CallToAction", $$CallToAction, { "href": "nicolas.vyplasil@hotmail.fr", "class": "astro-RCDZUQ3A" }, { "default": ($$result2) => renderTemplate`
		Ecrivez-moi
		${renderComponent($$result2, "Icon", $$Icon, { "icon": "paper-plane-tilt", "size": "1.2em", "class": "astro-RCDZUQ3A" })}
	` })}
</aside>`;
}, "C:/Z_projet/Porfolio_astro/src/components/ContactCTA.astro");

const $$Astro = createAstro();
async function getStaticPaths() {
  const work = await getCollection("work");
  return work.map((entry) => ({
    params: { slug: entry.slug },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await entry.render();
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": entry.data.title, "description": entry.data.description, "class": "astro-QWEKCIQP" }, { "default": ($$result2) => renderTemplate`
	${maybeRenderHead($$result2)}<div class="stack gap-20 astro-QWEKCIQP">
		<div class="stack gap-15 astro-QWEKCIQP">
			<header class="astro-QWEKCIQP">
				<div class="wrapper stack gap-2 astro-QWEKCIQP">
					<a class="back-link astro-QWEKCIQP" href="/work/">${renderComponent($$result2, "Icon", $$Icon, { "icon": "arrow-left", "class": "astro-QWEKCIQP" })} Retour</a>
					${renderComponent($$result2, "Hero", $$Hero, { "title": entry.data.title, "align": "start", "class": "astro-QWEKCIQP" }, { "default": ($$result3) => renderTemplate`
						<div class="details astro-QWEKCIQP">
							<div class="tags astro-QWEKCIQP">
								${entry.data.tags.map((t) => renderTemplate`${renderComponent($$result3, "Pill", $$Pill, { "class": "astro-QWEKCIQP" }, { "default": ($$result4) => renderTemplate`${t}` })}`)}
							</div>
							<p class="description astro-QWEKCIQP">${entry.data.description}</p>
						</div>
					` })}
				</div>
			</header>
			<main class="wrapper astro-QWEKCIQP">
				<div class="stack gap-10 content astro-QWEKCIQP">
					${entry.data.img && renderTemplate`<img${addAttribute(entry.data.img, "src")}${addAttribute(entry.data.img_alt || "", "alt")} class="astro-QWEKCIQP">`}
					<div class="content astro-QWEKCIQP">
						${renderComponent($$result2, "Content", Content, { "class": "astro-QWEKCIQP" })}
					</div>
				</div>
			</main>
		</div>
		${renderComponent($$result2, "ContactCTA", $$ContactCTA, { "class": "astro-QWEKCIQP" })}
	</div>
` })}`;
}, "C:/Z_projet/Porfolio_astro/src/pages/work/[...slug].astro");

const $$file = "C:/Z_projet/Porfolio_astro/src/pages/work/[...slug].astro";
const $$url = "/work/[...slug]";

const ____slug_ = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$ContactCTA as $, ____slug_ as _, $$Pill as a, $$CallToAction as b, getCollection as g };
