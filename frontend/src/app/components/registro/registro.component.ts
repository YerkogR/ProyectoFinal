import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-registro',
	templateUrl: './registro.component.html',
	styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

	comunasArray: Object[] | undefined;

	regiones: Array<any> = [];
	comunas: Array<any> = [];
	comunasFiltradas: Array<any> = [];

	constructor() { }

	ngOnInit(): void {

		this.regiones = [{
			"nombre": "Arica y Parinacota",
			"idRegion": "1"
		},
		{
			"nombre": "Tarapacá",
			"idRegion": "2"
		},
		{
			"nombre": "Antofagasta",
			"idRegion": "3"
		},
		{
			"nombre": "Atacama",
			"idRegion": "4"
		},
		{
			"nombre": "Coquimbo",
			"idRegion": "5"
		},
		{
			"nombre": "Valparaíso",
			"idRegion": "6"
		},
		{
			"nombre": "Libertador Bernardo O’Higgins",
			"idRegion": "7"
		},
		{
			"nombre": "Maule",
			"idRegion": "8"
		},
		{
			"nombre": "Biobío",
			"idRegion": "9"
		},
		{
			"nombre": "La Araucanía",
			"idRegion": "10"
		},
		{
			"nombre": "Los Ríos",
			"idRegion": "11"
		},
		{
			"nombre": "Los Lagos",
			"idRegion": "12"
		},
		{
			"nombre": "Aisén",
			"idRegion": "13"
		},
		{
			"nombre": "Magallanes y la Antártica Chilena",
			"idRegion": "14"
		},
		{
			"nombre": "Metropolitana de Santiago",
			"idRegion": "15"
		}];

		this.comunas = [{
			"nombre": "Arica",
			"idRegion": "1",
			"idComuna": "1"
		},
		{
			"nombre": "Camarones",
			"idRegion": "1",
			"idComuna": "2"
		},
		{
			"nombre": "Putre",
			"idRegion": "1",
			"idComuna": "3"
		},
		{
			"nombre": "General Lagos",
			"idRegion": "1",
			"idComuna": "4"
		},
		{
			"nombre": "Iquique",
			"idRegion": "2",
			"idComuna": "5"
		},
		{
			"nombre": "Alto Hospicio",
			"idRegion": "2",
			"idComuna": "6"
		},
		{
			"nombre": "Pozo Almonte",
			"idRegion": "2",
			"idComuna": "7"
		},
		{
			"nombre": "Camiña",
			"idRegion": "2",
			"idComuna": "8"
		},
		{
			"nombre": "Colchane",
			"idRegion": "2",
			"idComuna": "9"
		},
		{
			"nombre": "Huara",
			"idRegion": "2",
			"idComuna": "10"
		},
		{
			"nombre": "Pica",
			"idRegion": "2",
			"idComuna": "11"
		},
		{
			"nombre": "Antofagasta",
			"idRegion": "3",
			"idComuna": "12"
		},
		{
			"nombre": "Mejillones",
			"idRegion": "3",
			"idComuna": "13"
		},
		{
			"nombre": "Sierra Gorda",
			"idRegion": "3",
			"idComuna": "14"
		},
		{
			"nombre": "Taltal",
			"idRegion": "3",
			"idComuna": "15"
		},
		{
			"nombre": "Calama",
			"idRegion": "3",
			"idComuna": "16"
		},
		{
			"nombre": "Ollagüe",
			"idRegion": "3",
			"idComuna": "17"
		},
		{
			"nombre": "San Pedro de Atacama",
			"idRegion": "3",
			"idComuna": "18"
		},
		{
			"nombre": "Tocopilla",
			"idRegion": "3",
			"idComuna": "19"
		},
		{
			"nombre": "María Elena",
			"idRegion": "3",
			"idComuna": "20"
		},
		{
			"nombre": "Copiapó",
			"idRegion": "4",
			"idComuna": "21"
		},
		{
			"nombre": "Caldera",
			"idRegion": "4",
			"idComuna": "22"
		},
		{
			"nombre": "Tierra Amarilla",
			"idRegion": "4",
			"idComuna": "23"
		},
		{
			"nombre": "Chañaral",
			"idRegion": "4",
			"idComuna": "24"
		},
		{
			"nombre": "Diego de Almagro",
			"idRegion": "4",
			"idComuna": "25"
		},
		{
			"nombre": "Vallenar",
			"idRegion": "4",
			"idComuna": "26"
		},
		{
			"nombre": "Alto del Carmen",
			"idRegion": "4",
			"idComuna": "27"
		},
		{
			"nombre": "Freirina",
			"idRegion": "4",
			"idComuna": "28"
		},
		{
			"nombre": "Huasco",
			"idRegion": "4",
			"idComuna": "29"
		},
		{
			"nombre": "La Serena",
			"idRegion": "5",
			"idComuna": "30"
		},
		{
			"nombre": "Coquimbo",
			"idRegion": "5",
			"idComuna": "31"
		},
		{
			"nombre": "Andacollo",
			"idRegion": "5",
			"idComuna": "32"
		},
		{
			"nombre": "La Higuera",
			"idRegion": "5",
			"idComuna": "33"
		},
		{
			"nombre": "Paiguano",
			"idRegion": "5",
			"idComuna": "34"
		},
		{
			"nombre": "Vicuña",
			"idRegion": "5",
			"idComuna": "35"
		},
		{
			"nombre": "Illapel",
			"idRegion": "5",
			"idComuna": "36"
		},
		{
			"nombre": "Canela",
			"idRegion": "5",
			"idComuna": "37"
		},
		{
			"nombre": "Los Vilos",
			"idRegion": "5",
			"idComuna": "38"
		},
		{
			"nombre": "Salamanca",
			"idRegion": "5",
			"idComuna": "39"
		},
		{
			"nombre": "Ovalle",
			"idRegion": "5",
			"idComuna": "40"
		},
		{
			"nombre": "Combarbalá",
			"idRegion": "5",
			"idComuna": "41"
		},
		{
			"nombre": "Monte Patria",
			"idRegion": "5",
			"idComuna": "42"
		},
		{
			"nombre": "Punitaqui",
			"idRegion": "5",
			"idComuna": "43"
		},
		{
			"nombre": "Río Hurtado",
			"idRegion": "5",
			"idComuna": "44"
		},
		{
			"nombre": "Valparaíso",
			"idRegion": "6",
			"idComuna": "45"
		},
		{
			"nombre": "Casablanca",
			"idRegion": "6",
			"idComuna": "46"
		},
		{
			"nombre": "Concón",
			"idRegion": "6",
			"idComuna": "47"
		},
		{
			"nombre": "Juan Fernández",
			"idRegion": "6",
			"idComuna": "48"
		},
		{
			"nombre": "Puchuncaví",
			"idRegion": "6",
			"idComuna": "49"
		},
		{
			"nombre": "Quintero",
			"idRegion": "6",
			"idComuna": "50"
		},
		{
			"nombre": "Viña del Mar",
			"idRegion": "6",
			"idComuna": "51"
		},
		{
			"nombre": "Isla de Pascua",
			"idRegion": "6",
			"idComuna": "52"
		},
		{
			"nombre": "Los Andes",
			"idRegion": "6",
			"idComuna": "53"
		},
		{
			"nombre": "Calle Larga",
			"idRegion": "6",
			"idComuna": "54"
		},
		{
			"nombre": "Rinconada",
			"idRegion": "6",
			"idComuna": "55"
		},
		{
			"nombre": "San Esteban",
			"idRegion": "6",
			"idComuna": "56"
		},
		{
			"nombre": "La Ligua",
			"idRegion": "6",
			"idComuna": "57"
		},
		{
			"nombre": "Cabildo",
			"idRegion": "6",
			"idComuna": "58"
		},
		{
			"nombre": "Papudo",
			"idRegion": "6",
			"idComuna": "59"
		},
		{
			"nombre": "Petorca",
			"idRegion": "6",
			"idComuna": "60"
		},
		{
			"nombre": "Zapallar",
			"idRegion": "6",
			"idComuna": "61"
		},
		{
			"nombre": "Quillota",
			"idRegion": "6",
			"idComuna": "62"
		},
		{
			"nombre": "Calera",
			"idRegion": "6",
			"idComuna": "63"
		},
		{
			"nombre": "Hijuelas",
			"idRegion": "6",
			"idComuna": "64"
		},
		{
			"nombre": "La Cruz",
			"idRegion": "6",
			"idComuna": "65"
		},
		{
			"nombre": "Nogales",
			"idRegion": "6",
			"idComuna": "66"
		},
		{
			"nombre": "San Antonio",
			"idRegion": "6",
			"idComuna": "67"
		},
		{
			"nombre": "Algarrobo",
			"idRegion": "6",
			"idComuna": "68"
		},
		{
			"nombre": "Cartagena",
			"idRegion": "6",
			"idComuna": "69"
		},
		{
			"nombre": "El Quisco",
			"idRegion": "6",
			"idComuna": "70"
		},
		{
			"nombre": "El Tabo",
			"idRegion": "6",
			"idComuna": "71"
		},
		{
			"nombre": "Santo Domingo",
			"idRegion": "6",
			"idComuna": "72"
		},
		{
			"nombre": "San Felipe",
			"idRegion": "6",
			"idComuna": "73"
		},
		{
			"nombre": "Catemu",
			"idRegion": "6",
			"idComuna": "74"
		},
		{
			"nombre": "Llaillay",
			"idRegion": "6",
			"idComuna": "75"
		},
		{
			"nombre": "Panquehue",
			"idRegion": "6",
			"idComuna": "76"
		},
		{
			"nombre": "Putaendo",
			"idRegion": "6",
			"idComuna": "77"
		},
		{
			"nombre": "Santa María",
			"idRegion": "6",
			"idComuna": "78"
		},
		{
			"nombre": "Quilpué",
			"idRegion": "6",
			"idComuna": "79"
		},
		{
			"nombre": "Limache",
			"idRegion": "6",
			"idComuna": "80"
		},
		{
			"nombre": "Olmué",
			"idRegion": "6",
			"idComuna": "81"
		},
		{
			"nombre": "Villa Alemana",
			"idRegion": "6",
			"idComuna": "82"
		},
		{
			"nombre": "Rancagua",
			"idRegion": "7",
			"idComuna": "83"
		},
		{
			"nombre": "Codegua",
			"idRegion": "7",
			"idComuna": "84"
		},
		{
			"nombre": "Coinco",
			"idRegion": "7",
			"idComuna": "85"
		},
		{
			"nombre": "Coltauco",
			"idRegion": "7",
			"idComuna": "86"
		},
		{
			"nombre": "Doñihue",
			"idRegion": "7",
			"idComuna": "87"
		},
		{
			"nombre": "Graneros",
			"idRegion": "7",
			"idComuna": "88"
		},
		{
			"nombre": "Las Cabras",
			"idRegion": "7",
			"idComuna": "89"
		},
		{
			"nombre": "Machalí",
			"idRegion": "7",
			"idComuna": "90"
		},
		{
			"nombre": "Malloa",
			"idRegion": "7",
			"idComuna": "91"
		},
		{
			"nombre": "Mostazal",
			"idRegion": "7",
			"idComuna": "92"
		},
		{
			"nombre": "Olivar",
			"idRegion": "7",
			"idComuna": "93"
		},
		{
			"nombre": "Peumo",
			"idRegion": "7",
			"idComuna": "94"
		},
		{
			"nombre": "Pichidegua",
			"idRegion": "7",
			"idComuna": "95"
		},
		{
			"nombre": "Quinta de Tilcoco",
			"idRegion": "7",
			"idComuna": "96"
		},
		{
			"nombre": "Rengo",
			"idRegion": "7",
			"idComuna": "97"
		},
		{
			"nombre": "Requínoa",
			"idRegion": "7",
			"idComuna": "98"
		},
		{
			"nombre": "San Vicente",
			"idRegion": "7",
			"idComuna": "99"
		},
		{
			"nombre": "Pichilemu",
			"idRegion": "7",
			"idComuna": "100"
		},
		{
			"nombre": "La Estrella",
			"idRegion": "7",
			"idComuna": "101"
		},
		{
			"nombre": "Litueche",
			"idRegion": "7",
			"idComuna": "102"
		},
		{
			"nombre": "Marchihue",
			"idRegion": "7",
			"idComuna": "103"
		},
		{
			"nombre": "Navidad",
			"idRegion": "7",
			"idComuna": "104"
		},
		{
			"nombre": "Paredones",
			"idRegion": "7",
			"idComuna": "105"
		},
		{
			"nombre": "San Fernando",
			"idRegion": "7",
			"idComuna": "106"
		},
		{
			"nombre": "Chépica",
			"idRegion": "7",
			"idComuna": "107"
		},
		{
			"nombre": "Chimbarongo",
			"idRegion": "7",
			"idComuna": "108"
		},
		{
			"nombre": "Lolol",
			"idRegion": "7",
			"idComuna": "109"
		},
		{
			"nombre": "Nancagua",
			"idRegion": "7",
			"idComuna": "110"
		},
		{
			"nombre": "Palmilla",
			"idRegion": "7",
			"idComuna": "111"
		},
		{
			"nombre": "Peralillo",
			"idRegion": "7",
			"idComuna": "112"
		},
		{
			"nombre": "Placilla",
			"idRegion": "7",
			"idComuna": "113"
		},
		{
			"nombre": "Pumanque",
			"idRegion": "7",
			"idComuna": "114"
		},
		{
			"nombre": "Santa Cruz",
			"idRegion": "7",
			"idComuna": "115"
		},
		{
			"nombre": "Talca",
			"idRegion": "8",
			"idComuna": "116"
		},
		{
			"nombre": "Constitución",
			"idRegion": "8",
			"idComuna": "117"
		},
		{
			"nombre": "Curepto",
			"idRegion": "8",
			"idComuna": "118"
		},
		{
			"nombre": "Empedrado",
			"idRegion": "8",
			"idComuna": "119"
		},
		{
			"nombre": "Maule",
			"idRegion": "8",
			"idComuna": "120"
		},
		{
			"nombre": "Pelarco",
			"idRegion": "8",
			"idComuna": "121"
		},
		{
			"nombre": "Pencahue",
			"idRegion": "8",
			"idComuna": "122"
		},
		{
			"nombre": "Río Claro",
			"idRegion": "8",
			"idComuna": "123"
		},
		{
			"nombre": "San Clemente",
			"idRegion": "8",
			"idComuna": "124"
		},
		{
			"nombre": "San Rafael",
			"idRegion": "8",
			"idComuna": "125"
		},
		{
			"nombre": "Cauquenes",
			"idRegion": "8",
			"idComuna": "126"
		},
		{
			"nombre": "Chanco",
			"idRegion": "8",
			"idComuna": "127"
		},
		{
			"nombre": "Pelluhue",
			"idRegion": "8",
			"idComuna": "128"
		},
		{
			"nombre": "Curicó",
			"idRegion": "8",
			"idComuna": "129"
		},
		{
			"nombre": "Hualañé",
			"idRegion": "8",
			"idComuna": "130"
		},
		{
			"nombre": "Licantén",
			"idRegion": "8",
			"idComuna": "131"
		},
		{
			"nombre": "Molina",
			"idRegion": "8",
			"idComuna": "132"
		},
		{
			"nombre": "Rauco",
			"idRegion": "8",
			"idComuna": "133"
		},
		{
			"nombre": "Romeral",
			"idRegion": "8",
			"idComuna": "134"
		},
		{
			"nombre": "Sagrada Familia",
			"idRegion": "8",
			"idComuna": "135"
		},
		{
			"nombre": "Teno",
			"idRegion": "8",
			"idComuna": "136"
		},
		{
			"nombre": "Vichuquén",
			"idRegion": "8",
			"idComuna": "137"
		},
		{
			"nombre": "Linares",
			"idRegion": "8",
			"idComuna": "138"
		},
		{
			"nombre": "Colbún",
			"idRegion": "8",
			"idComuna": "139"
		},
		{
			"nombre": "Longaví",
			"idRegion": "8",
			"idComuna": "140"
		},
		{
			"nombre": "Parral",
			"idRegion": "8",
			"idComuna": "141"
		},
		{
			"nombre": "Retiro",
			"idRegion": "8",
			"idComuna": "142"
		},
		{
			"nombre": "San Javier",
			"idRegion": "8",
			"idComuna": "143"
		},
		{
			"nombre": "Villa Alegre",
			"idRegion": "8",
			"idComuna": "144"
		},
		{
			"nombre": "Yerbas Buenas",
			"idRegion": "8",
			"idComuna": "145"
		},
		{
			"nombre": "Concepción",
			"idRegion": "9",
			"idComuna": "146"
		},
		{
			"nombre": "Coronel",
			"idRegion": "9",
			"idComuna": "147"
		},
		{
			"nombre": "Chiguayante",
			"idRegion": "9",
			"idComuna": "148"
		},
		{
			"nombre": "Florida",
			"idRegion": "9",
			"idComuna": "149"
		},
		{
			"nombre": "Hualqui",
			"idRegion": "9",
			"idComuna": "150"
		},
		{
			"nombre": "Lota",
			"idRegion": "9",
			"idComuna": "151"
		},
		{
			"nombre": "Penco",
			"idRegion": "9",
			"idComuna": "152"
		},
		{
			"nombre": "San Pedro de la Paz",
			"idRegion": "9",
			"idComuna": "153"
		},
		{
			"nombre": "Santa Juana",
			"idRegion": "9",
			"idComuna": "154"
		},
		{
			"nombre": "Talcahuano",
			"idRegion": "9",
			"idComuna": "155"
		},
		{
			"nombre": "Tomé",
			"idRegion": "9",
			"idComuna": "156"
		},
		{
			"nombre": "Hualpén",
			"idRegion": "9",
			"idComuna": "157"
		},
		{
			"nombre": "Lebu",
			"idRegion": "9",
			"idComuna": "158"
		},
		{
			"nombre": "Arauco",
			"idRegion": "9",
			"idComuna": "159"
		},
		{
			"nombre": "Cañete",
			"idRegion": "9",
			"idComuna": "160"
		},
		{
			"nombre": "Contulmo",
			"idRegion": "9",
			"idComuna": "161"
		},
		{
			"nombre": "Curanilahue",
			"idRegion": "9",
			"idComuna": "162"
		},
		{
			"nombre": "Los Álamos",
			"idRegion": "9",
			"idComuna": "163"
		},
		{
			"nombre": "Tirúa",
			"idRegion": "9",
			"idComuna": "164"
		},
		{
			"nombre": "Los Ángeles",
			"idRegion": "9",
			"idComuna": "165"
		},
		{
			"nombre": "Antuco",
			"idRegion": "9",
			"idComuna": "166"
		},
		{
			"nombre": "Cabrero",
			"idRegion": "9",
			"idComuna": "167"
		},
		{
			"nombre": "Laja",
			"idRegion": "9",
			"idComuna": "168"
		},
		{
			"nombre": "Mulchén",
			"idRegion": "9",
			"idComuna": "169"
		},
		{
			"nombre": "Nacimiento",
			"idRegion": "9",
			"idComuna": "170"
		},
		{
			"nombre": "Negrete",
			"idRegion": "9",
			"idComuna": "171"
		},
		{
			"nombre": "Quilaco",
			"idRegion": "9",
			"idComuna": "172"
		},
		{
			"nombre": "Quilleco",
			"idRegion": "9",
			"idComuna": "173"
		},
		{
			"nombre": "San Rosendo",
			"idRegion": "9",
			"idComuna": "174"
		},
		{
			"nombre": "Santa Bárbara",
			"idRegion": "9",
			"idComuna": "175"
		},
		{
			"nombre": "Tucapel",
			"idRegion": "9",
			"idComuna": "176"
		},
		{
			"nombre": "Yumbel",
			"idRegion": "9",
			"idComuna": "177"
		},
		{
			"nombre": "Alto Biobío",
			"idRegion": "9",
			"idComuna": "178"
		},
		{
			"nombre": "Chillán",
			"idRegion": "9",
			"idComuna": "179"
		},
		{
			"nombre": "Bulnes",
			"idRegion": "9",
			"idComuna": "180"
		},
		{
			"nombre": "Cobquecura",
			"idRegion": "9",
			"idComuna": "181"
		},
		{
			"nombre": "Coelemu",
			"idRegion": "9",
			"idComuna": "182"
		},
		{
			"nombre": "Coihueco",
			"idRegion": "9",
			"idComuna": "183"
		},
		{
			"nombre": "Chillán Viejo",
			"idRegion": "9",
			"idComuna": "184"
		},
		{
			"nombre": "El Carmen",
			"idRegion": "9",
			"idComuna": "185"
		},
		{
			"nombre": "Ninhue",
			"idRegion": "9",
			"idComuna": "186"
		},
		{
			"nombre": "Ñiquén",
			"idRegion": "9",
			"idComuna": "187"
		},
		{
			"nombre": "Pemuco",
			"idRegion": "9",
			"idComuna": "188"
		},
		{
			"nombre": "Pinto",
			"idRegion": "9",
			"idComuna": "189"
		},
		{
			"nombre": "Portezuelo",
			"idRegion": "9",
			"idComuna": "190"
		},
		{
			"nombre": "Quillón",
			"idRegion": "9",
			"idComuna": "191"
		},
		{
			"nombre": "Quirihue",
			"idRegion": "9",
			"idComuna": "192"
		},
		{
			"nombre": "Ránquil",
			"idRegion": "9",
			"idComuna": "193"
		},
		{
			"nombre": "San Carlos",
			"idRegion": "9",
			"idComuna": "194"
		},
		{
			"nombre": "San Fabián",
			"idRegion": "9",
			"idComuna": "195"
		},
		{
			"nombre": "San Ignacio",
			"idRegion": "9",
			"idComuna": "196"
		},
		{
			"nombre": "San Nicolás",
			"idRegion": "9",
			"idComuna": "197"
		},
		{
			"nombre": "Treguaco",
			"idRegion": "9",
			"idComuna": "198"
		},
		{
			"nombre": "Yungay",
			"idRegion": "9",
			"idComuna": "199"
		},
		{
			"nombre": "Temuco",
			"idRegion": "10",
			"idComuna": "200"
		},
		{
			"nombre": "Carahue",
			"idRegion": "10",
			"idComuna": "201"
		},
		{
			"nombre": "Cunco",
			"idRegion": "10",
			"idComuna": "202"
		},
		{
			"nombre": "Curarrehue",
			"idRegion": "10",
			"idComuna": "203"
		},
		{
			"nombre": "Freire",
			"idRegion": "10",
			"idComuna": "204"
		},
		{
			"nombre": "Galvarino",
			"idRegion": "10",
			"idComuna": "205"
		},
		{
			"nombre": "Gorbea",
			"idRegion": "10",
			"idComuna": "206"
		},
		{
			"nombre": "Lautaro",
			"idRegion": "10",
			"idComuna": "207"
		},
		{
			"nombre": "Loncoche",
			"idRegion": "10",
			"idComuna": "208"
		},
		{
			"nombre": "Melipeuco",
			"idRegion": "10",
			"idComuna": "209"
		},
		{
			"nombre": "Nueva Imperial",
			"idRegion": "10",
			"idComuna": "210"
		},
		{
			"nombre": "Padre las Casas",
			"idRegion": "10",
			"idComuna": "211"
		},
		{
			"nombre": "Perquenco",
			"idRegion": "10",
			"idComuna": "212"
		},
		{
			"nombre": "Pitrufquén",
			"idRegion": "10",
			"idComuna": "213"
		},
		{
			"nombre": "Pucón",
			"idRegion": "10",
			"idComuna": "214"
		},
		{
			"nombre": "Saavedra",
			"idRegion": "10",
			"idComuna": "215"
		},
		{
			"nombre": "Teodoro Schmidt",
			"idRegion": "10",
			"idComuna": "216"
		},
		{
			"nombre": "Toltén",
			"idRegion": "10",
			"idComuna": "217"
		},
		{
			"nombre": "Vilcún",
			"idRegion": "10",
			"idComuna": "218"
		},
		{
			"nombre": "Villarrica",
			"idRegion": "10",
			"idComuna": "219"
		},
		{
			"nombre": "Cholchol",
			"idRegion": "10",
			"idComuna": "220"
		},
		{
			"nombre": "Angol",
			"idRegion": "10",
			"idComuna": "221"
		},
		{
			"nombre": "Collipulli",
			"idRegion": "10",
			"idComuna": "222"
		},
		{
			"nombre": "Curacautín",
			"idRegion": "10",
			"idComuna": "223"
		},
		{
			"nombre": "Ercilla",
			"idRegion": "10",
			"idComuna": "224"
		},
		{
			"nombre": "Lonquimay",
			"idRegion": "10",
			"idComuna": "225"
		},
		{
			"nombre": "Los Sauces",
			"idRegion": "10",
			"idComuna": "226"
		},
		{
			"nombre": "Lumaco",
			"idRegion": "10",
			"idComuna": "227"
		},
		{
			"nombre": "Purén",
			"idRegion": "10",
			"idComuna": "228"
		},
		{
			"nombre": "Renaico",
			"idRegion": "10",
			"idComuna": "229"
		},
		{
			"nombre": "Traiguén",
			"idRegion": "10",
			"idComuna": "230"
		},
		{
			"nombre": "Victoria",
			"idRegion": "10",
			"idComuna": "231"
		},
		{
			"nombre": "Valdivia",
			"idRegion": "11",
			"idComuna": "232"
		},
		{
			"nombre": "Corral",
			"idRegion": "11",
			"idComuna": "233"
		},
		{
			"nombre": "Lanco",
			"idRegion": "11",
			"idComuna": "234"
		},
		{
			"nombre": "Los Lagos",
			"idRegion": "11",
			"idComuna": "235"
		},
		{
			"nombre": "Máfil",
			"idRegion": "11",
			"idComuna": "236"
		},
		{
			"nombre": "Mariquina",
			"idRegion": "11",
			"idComuna": "237"
		},
		{
			"nombre": "Paillaco",
			"idRegion": "11",
			"idComuna": "238"
		},
		{
			"nombre": "Panguipulli",
			"idRegion": "11",
			"idComuna": "239"
		},
		{
			"nombre": "La Unión",
			"idRegion": "11",
			"idComuna": "240"
		},
		{
			"nombre": "Futrono",
			"idRegion": "11",
			"idComuna": "241"
		},
		{
			"nombre": "Lago Ranco",
			"idRegion": "11",
			"idComuna": "242"
		},
		{
			"nombre": "Río Bueno",
			"idRegion": "11",
			"idComuna": "243"
		},
		{
			"nombre": "Puerto Montt",
			"idRegion": "12",
			"idComuna": "244"
		},
		{
			"nombre": "Calbuco",
			"idRegion": "12",
			"idComuna": "245"
		},
		{
			"nombre": "Cochamó",
			"idRegion": "12",
			"idComuna": "246"
		},
		{
			"nombre": "Fresia",
			"idRegion": "12",
			"idComuna": "247"
		},
		{
			"nombre": "Frutillar",
			"idRegion": "12",
			"idComuna": "248"
		},
		{
			"nombre": "Los Muermos",
			"idRegion": "12",
			"idComuna": "249"
		},
		{
			"nombre": "Llanquihue",
			"idRegion": "12",
			"idComuna": "250"
		},
		{
			"nombre": "Maullín",
			"idRegion": "12",
			"idComuna": "251"
		},
		{
			"nombre": "Puerto Varas",
			"idRegion": "12",
			"idComuna": "252"
		},
		{
			"nombre": "Castro",
			"idRegion": "12",
			"idComuna": "253"
		},
		{
			"nombre": "Ancud",
			"idRegion": "12",
			"idComuna": "254"
		},
		{
			"nombre": "Chonchi",
			"idRegion": "12",
			"idComuna": "255"
		},
		{
			"nombre": "Curaco de Vélez",
			"idRegion": "12",
			"idComuna": "256"
		},
		{
			"nombre": "Dalcahue",
			"idRegion": "12",
			"idComuna": "257"
		},
		{
			"nombre": "Puqueldón",
			"idRegion": "12",
			"idComuna": "258"
		},
		{
			"nombre": "Queilén",
			"idRegion": "12",
			"idComuna": "259"
		},
		{
			"nombre": "Quellón",
			"idRegion": "12",
			"idComuna": "260"
		},
		{
			"nombre": "Quemchi",
			"idRegion": "12",
			"idComuna": "261"
		},
		{
			"nombre": "Quinchao",
			"idRegion": "12",
			"idComuna": "262"
		},
		{
			"nombre": "Osorno",
			"idRegion": "12",
			"idComuna": "263"
		},
		{
			"nombre": "Puerto Octay",
			"idRegion": "12",
			"idComuna": "264"
		},
		{
			"nombre": "Purranque",
			"idRegion": "12",
			"idComuna": "265"
		},
		{
			"nombre": "Puyehue",
			"idRegion": "12",
			"idComuna": "266"
		},
		{
			"nombre": "Río Negro",
			"idRegion": "12",
			"idComuna": "267"
		},
		{
			"nombre": "San Juan de la Costa",
			"idRegion": "12",
			"idComuna": "268"
		},
		{
			"nombre": "San Pablo",
			"idRegion": "12",
			"idComuna": "269"
		},
		{
			"nombre": "Chaitén",
			"idRegion": "12",
			"idComuna": "270"
		},
		{
			"nombre": "Futaleufú",
			"idRegion": "12",
			"idComuna": "271"
		},
		{
			"nombre": "Hualaihué",
			"idRegion": "12",
			"idComuna": "272"
		},
		{
			"nombre": "Palena",
			"idRegion": "12",
			"idComuna": "273"
		},
		{
			"nombre": "Coihaique",
			"idRegion": "13",
			"idComuna": "274"
		},
		{
			"nombre": "Lago Verde",
			"idRegion": "13",
			"idComuna": "275"
		},
		{
			"nombre": "Aisén",
			"idRegion": "13",
			"idComuna": "276"
		},
		{
			"nombre": "Cisnes",
			"idRegion": "13",
			"idComuna": "277"
		},
		{
			"nombre": "Guaitecas",
			"idRegion": "13",
			"idComuna": "278"
		},
		{
			"nombre": "Cochrane",
			"idRegion": "13",
			"idComuna": "279"
		},
		{
			"nombre": "O’Higgins",
			"idRegion": "13",
			"idComuna": "280"
		},
		{
			"nombre": "Tortel",
			"idRegion": "13",
			"idComuna": "281"
		},
		{
			"nombre": "Chile Chico",
			"idRegion": "13",
			"idComuna": "282"
		},
		{
			"nombre": "Río Ibáñez",
			"idRegion": "13",
			"idComuna": "283"
		},
		{
			"nombre": "Punta Arenas",
			"idRegion": "14",
			"idComuna": "284"
		},
		{
			"nombre": "Laguna Blanca",
			"idRegion": "14",
			"idComuna": "285"
		},
		{
			"nombre": "Río Verde",
			"idRegion": "14",
			"idComuna": "286"
		},
		{
			"nombre": "San Gregorio",
			"idRegion": "14",
			"idComuna": "287"
		},
		{
			"nombre": "Cabo de Hornos (Ex Navarino)",
			"idRegion": "14",
			"idComuna": "288"
		},
		{
			"nombre": "Antártica",
			"idRegion": "14",
			"idComuna": "289"
		},
		{
			"nombre": "Porvenir",
			"idRegion": "14",
			"idComuna": "290"
		},
		{
			"nombre": "Primavera",
			"idRegion": "14",
			"idComuna": "291"
		},
		{
			"nombre": "Timaukel",
			"idRegion": "14",
			"idComuna": "292"
		},
		{
			"nombre": "Natales",
			"idRegion": "14",
			"idComuna": "293"
		},
		{
			"nombre": "Torres del Paine",
			"idRegion": "14",
			"idComuna": "294"
		},
		{
			"nombre": "Cerrillos",
			"idRegion": "15",
			"idComuna": "295"
		},
		{
			"nombre": "Cerro Navia",
			"idRegion": "15",
			"idComuna": "296"
		},
		{
			"nombre": "Conchalí",
			"idRegion": "15",
			"idComuna": "297"
		},
		{
			"nombre": "El Bosque",
			"idRegion": "15",
			"idComuna": "298"
		},
		{
			"nombre": "Estación Central",
			"idRegion": "15",
			"idComuna": "299"
		},
		{
			"nombre": "Huechuraba",
			"idRegion": "15",
			"idComuna": "300"
		},
		{
			"nombre": "Independencia",
			"idRegion": "15",
			"idComuna": "301"
		},
		{
			"nombre": "La Cisterna",
			"idRegion": "15",
			"idComuna": "302"
		},
		{
			"nombre": "La Florida",
			"idRegion": "15",
			"idComuna": "303"
		},
		{
			"nombre": "La Granja",
			"idRegion": "15",
			"idComuna": "304"
		},
		{
			"nombre": "La Pintana",
			"idRegion": "15",
			"idComuna": "305"
		},
		{
			"nombre": "La Reina",
			"idRegion": "15",
			"idComuna": "306"
		},
		{
			"nombre": "Las Condes",
			"idRegion": "15",
			"idComuna": "307"
		},
		{
			"nombre": "Lo Barnechea",
			"idRegion": "15",
			"idComuna": "308"
		},
		{
			"nombre": "Lo Espejo",
			"idRegion": "15",
			"idComuna": "309"
		},
		{
			"nombre": "Lo Prado",
			"idRegion": "15",
			"idComuna": "310"
		},
		{
			"nombre": "Macul",
			"idRegion": "15",
			"idComuna": "311"
		},
		{
			"nombre": "Maipú",
			"idRegion": "15",
			"idComuna": "312"
		},
		{
			"nombre": "Ñuñoa",
			"idRegion": "15",
			"idComuna": "313"
		},
		{
			"nombre": "Pedro Aguirre Cerda",
			"idRegion": "15",
			"idComuna": "314"
		},
		{
			"nombre": "Peñalolén",
			"idRegion": "15",
			"idComuna": "315"
		},
		{
			"nombre": "Providencia",
			"idRegion": "15",
			"idComuna": "316"
		},
		{
			"nombre": "Pudahuel",
			"idRegion": "15",
			"idComuna": "317"
		},
		{
			"nombre": "Quilicura",
			"idRegion": "15",
			"idComuna": "318"
		},
		{
			"nombre": "Quinta Normal",
			"idRegion": "15",
			"idComuna": "319"
		},
		{
			"nombre": "Recoleta",
			"idRegion": "15",
			"idComuna": "320"
		},
		{
			"nombre": "Renca",
			"idRegion": "15",
			"idComuna": "321"
		},
		{
			"nombre": "San Joaquín",
			"idRegion": "15",
			"idComuna": "322"
		},
		{
			"nombre": "San Miguel",
			"idRegion": "15",
			"idComuna": "323"
		},
		{
			"nombre": "San Ramón",
			"idRegion": "15",
			"idComuna": "324"
		},
		{
			"nombre": "Vitacura",
			"idRegion": "15",
			"idComuna": "325"
		},
		{
			"nombre": "Puente Alto",
			"idRegion": "15",
			"idComuna": "326"
		},
		{
			"nombre": "Pirque",
			"idRegion": "15",
			"idComuna": "327"
		},
		{
			"nombre": "San José de Maipo",
			"idRegion": "15",
			"idComuna": "328"
		},
		{
			"nombre": "Colina",
			"idRegion": "15",
			"idComuna": "329"
		},
		{
			"nombre": "Lampa",
			"idRegion": "15",
			"idComuna": "330"
		},
		{
			"nombre": "Tiltil",
			"idRegion": "15",
			"idComuna": "331"
		},
		{
			"nombre": "San Bernardo",
			"idRegion": "15",
			"idComuna": "332"
		},
		{
			"nombre": "Buin",
			"idRegion": "15",
			"idComuna": "333"
		},
		{
			"nombre": "Calera de Tango",
			"idRegion": "15",
			"idComuna": "334"
		},
		{
			"nombre": "Paine",
			"idRegion": "15",
			"idComuna": "335"
		},
		{
			"nombre": "Melipilla",
			"idRegion": "15",
			"idComuna": "336"
		},
		{
			"nombre": "Alhué",
			"idRegion": "15",
			"idComuna": "337"
		},
		{
			"nombre": "Curacaví",
			"idRegion": "15",
			"idComuna": "338"
		},
		{
			"nombre": "María Pinto",
			"idRegion": "15",
			"idComuna": "339"
		},
		{
			"nombre": "San Pedro",
			"idRegion": "15",
			"idComuna": "340"
		},
		{
			"nombre": "Talagante",
			"idRegion": "15",
			"idComuna": "341"
		},
		{
			"nombre": "El Monte",
			"idRegion": "15",
			"idComuna": "342"
		},
		{
			"nombre": "Isla de Maipo",
			"idRegion": "15",
			"idComuna": "343"
		},
		{
			"nombre": "Padre Hurtado",
			"idRegion": "15",
			"idComuna": "344"
		},
		{
			"nombre": "Peñaflor",
			"idRegion": "15",
			"idComuna": "345"
		},
		];

	}

	onChange(data: any) {
		this.comunasFiltradas = this.comunas.filter(city => city.idRegion === data);
	}
}