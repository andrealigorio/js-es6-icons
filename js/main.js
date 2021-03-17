$(document).ready(function () {

/* Milestone 1
Partendo dalla struttura dati che troviamo sotto, mostriamo in pagina tutte le icone disponibili come da layout. */

	const icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];

	const iconsContainer = $('.icons');

	
	/* Milestone 2
	Coloriamo le icone per tipo */
	
	const color = ["blue", "orange", "purple"];
	
	const iconsType = [];
	icons.forEach((element) => {
		if (!iconsType.includes(element.type)) {
			iconsType.push(element.type);
		}
	});
	console.log(iconsType);
	
	const iconsColored = icons.map((element) => {
		const indexType = iconsType.indexOf(element.type);
		if(indexType != -1) {
			element.color = color[indexType];
		}
		return element;
	});
	console.log(iconsColored);

	printIcons(iconsColored, iconsContainer);
});

/* FUNZIONI */

function printIcons(array, container) {
	container.empty();

	array.forEach((element) => {

		const { name, prefix, family, color } = element;

		container.append(`
		<div>
			<i class="${family} ${prefix}${name}" style="color: ${color}"></i>
			<div class="icons_title" style="color: ${color}">${name}</div>
		</div>`);
	});
}