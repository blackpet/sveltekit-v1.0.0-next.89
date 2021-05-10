<nav>
	<ul class='grid grid-cols-3 gap-4'>
		<li class='card'>
			<h2>layouts</h2>
			<ul>
				<li><a href='/templates/layouts1'>Layout 1</a></li>
				<li><a href='/templates/sick-fits'>
					Sick Fits (with tailwind theme)
					<div class='text-xs text-red-400 hover:text-red-600'>
						<a href='https://youtu.be/mK-ePxnfcJw' target='_blank'>Youtube: Rebuilding Sick Fits with Tailwind CSS <i class='fas fa-external-link-alt'></i></a>
					</div>
				</a></li>
				<li><a>test 2</a></li>
				<li><a>test 3</a></li>
			</ul>
		</li>

		<li class='card'>
			<h2>components</h2>
			<ul>
				<li><a href="/examples/backdrop-example">Backdrop / Modal</a></li>
				<li><a href="/calendar/timegrid-example">Timegrid</a></li>
				<li><a>test 3</a></li>
			</ul>
		</li>
		<li class='card'>
			<h2>pages</h2>
			<ul>
				<li><a>test 1</a></li>
				<li><a>test 2</a></li>
				<li><a>test 3</a></li>
			</ul>
		</li>
		<li class='card'>
			<h2>utilities</h2>
			<ul>
				<li><a>test 1</a></li>
				<li><a>test 2</a></li>
				<li><a>test 3</a></li>
			</ul>
		</li>
	</ul>
</nav>

<style lang='postcss'>
	nav {@apply bg-gray-100 rounded-lg py-8 px-4;}
	.card {@apply bg-white rounded-lg;}
	h2 {@apply bg-blue-100 py-2 text-2xl capitalize rounded-t-lg;}
	.card li {@apply border-b text-gray-400;}
	.card li > a {@apply block h-full py-1;}
	.card li > a[href] {@apply block h-full py-1 text-blue-500 hover:bg-blue-50 hover:text-blue-700;}
</style>
