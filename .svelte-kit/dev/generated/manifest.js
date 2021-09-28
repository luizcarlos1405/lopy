const c = [
	() => import("../../../src/routes/__layout.svelte"),
	() => import("../../../src/routes/__error.svelte"),
	() => import("../../../src/routes/index.svelte"),
	() => import("../../../src/routes/envelope/edit/[id].svelte"),
	() => import("../../../src/routes/envelope/[id].svelte")
];

const d = decodeURIComponent;

export const routes = [
	// src/routes/index.svelte
	[/^\/$/, [c[0], c[2]], [c[1]]],

	// src/routes/envelope/edit/[id].svelte
	[/^\/envelope\/edit\/([^/]+?)\/?$/, [c[0], c[3]], [c[1]], (m) => ({ id: d(m[1])})],

	// src/routes/envelope/[id].svelte
	[/^\/envelope\/([^/]+?)\/?$/, [c[0], c[4]], [c[1]], (m) => ({ id: d(m[1])})]
];

// we import the root layout/error components eagerly, so that
// connectivity errors after initialisation don't nuke the app
export const fallback = [c[0](), c[1]()];