import './App.css';
import Fio from './Fio';
import './fio.css';

function App() {
	let osvoi = <p class = 'os'>Хочу освоить</p>;
	let a = <img src= '1.jpg' class ='kot'/>;
	
	let b = <p class='text_1'>МОЙ КОМПЕТЕНЦИЙ</p>;

	let c = [<p class='my my_2'>Внимательность</p>,<p class='my my_3'>Трудолюбие</p>,<p class='my my_4'>упорство</p>,<p class='my my_5'>целеустремленность</p>];

	let d = [<p class='osvoi osvoi_1'>аналитическое мышление</p>,<p class='osvoi osvoi_2'>критическое мышление</p>,<p class='osvoi osvoi_3'>коммуникативные навыки</p>,<p class='osvoi osvoi_4'>гибкость</p>,<p class='osvoi osvoi_5'>адаптивность</p>,<p class='osvoi osvoi_6'>управление временем</p>,<p class='osvoi osvoi_7'>организация работы</p>,<p class='osvoi osvoi_8'>межличностные навыки</p>,<p class='osvoi osvoi_9'>осведомленность</p>,<p class='osvoi osvoi_10'>креативное мышление</p>];

	return <div>
		<Fio/>
		{b} {osvoi} {a} 
		{c[0]} {c[1]} {c[2]} {c[3]}
		{d[0]} {d[1]} {d[2]} {d[3]} {d[4]} {d[5]} {d[6]} {d[7]} {d[8]} {d[9]}
	</div>;
};
export default App;