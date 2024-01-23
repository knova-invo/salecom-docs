import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación',
			sidebar: [
				{
					label: 'Guías',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Vehículos', link: '/guides/vehicles/' },
						{ label: 'Casos', link: '/guides/cases/' },
						{ label: 'Pagos', link: '/guides/payments/' },
						{ label: 'Revisión Casos', link: '/guides/reviews/' },
						{ label: 'Pago Casos', link: '/guides/payouts/' },
						{ label: 'Usuarios', link: '/guides/users/' },
					],
				},
				{
					label: 'Referencias',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
