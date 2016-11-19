import json, re

desc_shops = re.sub("[\n\t]", "", """
			<h4>Задачи:</h4>
			<ul>
				<li>Реализовать верстку на основе предоставленного psd дизайна.</li>
				<li>Отдельно реализовать мобильную верстку сайта.</li>
				<li>Покрытие всего функционала сайта автоматизированными тестами.</li>
				<li>Реализовать тесты на основе скриншотов.</li>
			</ul>
			<h4>Особенности:</h4>
			<ul>
				<li>Модульная структура проекта.</li>
				<li>Адаптивная/кроссбраузерная верстка.</li>
				<li>Функционал, процесса заказа товара, должен работать при отключенном JavaScript.</li>
			</ul>
			<h4>Технологии:</h4>
			<ul>
				<li>Препроцессор Stylus.</li>
				<li>Шаблонизатор Jinja2.</li>
				<li>Сборщик webpack.</li>
				<li>Система контроля версий - Git</li>
				<li>Инструмент для тестирования Selenium</li>
				<li>Gitlab, Youtrack и т.п.
				<li>JavaScript, jQuery, html и т.п.</li>
			</ul>""")

data = [
	{
		"title": "Интернет магазин №1",
		"slug": "shop1",
		"cat": "frontend",
		"img": "shop1.png",
		"desc": desc_shops
	},
	{
		"title": "Интернет магазин №3",
		"slug": "shop3",
		"cat": "frontend",
		"img": "shop3.png",
		"desc": desc_shops
	},
	{
		"title": "Интернет магазин №4",
		"slug": "shop4",
		"cat": "frontend",
		"img": "shop4.png",
		"desc": desc_shops
	},
	{
		"title": "Интернет магазин №5",
		"slug": "shop5",
		"cat": "frontend",
		"img": "shop5.png",
		"desc": desc_shops
	},
	{
		"title": "Интернет магазин №6",
		"slug": "shop6",
		"cat": "frontend",
		"img": "shop6.png",
		"desc": desc_shops
	},
	{
		"title": "Сервис обслуживания клиентов",
		"slug": "csc",
		"cat": "frontend",
		"img": "csc.png",
		"desc": "description_csc"
	},
	{
		"title": "Сервис оформления заказа",
		"slug": "checkout",
		"cat": "frontend",
		"img": "checkout.png",
		"desc": "description"
	},
	{
		"title": "Курсовая работа \"Обучающие материалы по Django\"",
		"slug": "course_work",
		"cat": "frontend",
		"img": "course_work.png",
		"desc": "description"
	},
	{
		"title": "Панель администрирования",
		"slug": "dashboard",
		"cat": "frontend",
		"img": "dashboard.png",
		"desc": "<p>В процессе работы я изучил следующие технологии:</p><ul><li>Фреймворк bootstrap3</li><li>База данных MongoDB</li><li>Система контроля версий - Git</li><li>Библиотека python - pymongo</li><li>AWS</li><li>Веб-сервер Nginx</li></ul><p>Так же в разработке использовались следующие технологии:<ul></li><li>Фреймворк Django</li><li>Фреймворк bootstrap3</li><li>Bash</li><li>HTML, CSS3, JQuery</li></ul>"
	},
	{
		"title": "Дипломная работа \"Интернет магазин на Django\"",
		"slug": "diploma",
		"cat": "frontend",
		"img": "diploma.png",
		"desc": "description"
	}
]

with open("data.json", "w", encoding="utf-8") as data_file:    
	data_file.write(json.dumps(data, ensure_ascii = False, indent=4))
	data_file.close()
	
	
