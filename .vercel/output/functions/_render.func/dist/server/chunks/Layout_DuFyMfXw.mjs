import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as createAstro, b as addAttribute, d as renderHead, e as renderComponent, f as renderSlot } from './astro/server_BzWAmyCR.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="navbar" data-astro-cid-5blmo7yk> <div class="nav-container" data-astro-cid-5blmo7yk> <div class="nav-logo" data-astro-cid-5blmo7yk> <a href="/" data-astro-cid-5blmo7yk><span data-astro-cid-5blmo7yk>Dictum</span></a> </div> <ul class="nav-menu" data-astro-cid-5blmo7yk> <li data-astro-cid-5blmo7yk><a href="/#inicio" data-astro-cid-5blmo7yk>Inicio</a></li> <li data-astro-cid-5blmo7yk><a href="/#personajes" data-astro-cid-5blmo7yk>Funcionalidades</a></li> <li data-astro-cid-5blmo7yk><a href="/#tecnologia" data-astro-cid-5blmo7yk>Tecnologías</a></li> <li data-astro-cid-5blmo7yk><a href="/#testimonials" data-astro-cid-5blmo7yk>Testimonios</a></li> </ul> <div class="nav-toggle" data-astro-cid-5blmo7yk> <span data-astro-cid-5blmo7yk></span> <span data-astro-cid-5blmo7yk></span> <span data-astro-cid-5blmo7yk></span> </div> </div> </nav> `;
}, "C:/Users/francis/Documents/GitHub/WebDictum/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title><link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet"><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">${renderHead()}</head> <body> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/Users/francis/Documents/GitHub/WebDictum/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
