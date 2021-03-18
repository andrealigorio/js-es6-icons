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
	
	const iconsType = getIconsType(icons);
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
	
	/* Milestone 3
	Creiamo una select con i tipi di icone e usiamola per filtrare le icone */

	const selectContainer = $('#type');

	printSelect(iconsType, selectContainer);

	changeOption(iconsColored, selectContainer, iconsContainer);
});

/* FUNZIONI */

function printIcons(array, container) {
	container.empty();

	array.forEach((element) => {

		const { name, prefix, family, color } = element;

		container.append(`
		<div class="icons_box">
			<i class="${family} ${prefix}${name}" style="color: ${color}"></i>
			<div class="icons_title">${name}</div>
		</div>`);
	});
}

function getIconsType(array) {
	const iconsType = [];
	array.forEach((element) => {
		if (!iconsType.includes(element.type)) {
			iconsType.push(element.type);
		}
	});
	return iconsType;
}

function printSelect(array, container) {
	array.forEach((element) => {
		
		container.append(`<option value="${element}">${element}</option>`);
	});
}

function changeOption(array, container, iconsContainer) {
	container.change(function() {
		const selected = $(this).val();
		const filtered = array.filter((element) => {
			return element.type == selected; 
		});
		if (filtered.length == 0) {
			printIcons(array, iconsContainer);
		} else {
			printIcons(filtered, iconsContainer);
		}
	});
}