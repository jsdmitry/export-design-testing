const json = {
    surveyPostId: "98269b22-5a20-47ef-9cda-4dac65e38a49",
    title: "Тестирование вариантов интерфейса экспорта DataGrid",
    pages: [
        {
            name: "page1",
            elements: [
                {
                    type: "html",
                    name: "task",
                    html: "<h3>Задание</h3><br>В каждом из 4-х вариантов выполните экспорт всех записей таблицы DataGrid в формате Excel. После этого выделите несколько строк и выполните эскорт выбранных строк в PDF. <br><br>После выполнения каждого варианта ответьте на вопрос. После выполнения всех заданий ответьте на несколько общих вопросов. Не забудьте нажать кнопку <b>Complete</b> внизу страницы."
                },
                {
                    type: "panel",
                    name: "panel1",
                    elements: [
                        {
                            type: "html",
                            name: "question1",
                            html: "<div id=\"variant1\"></div>"
                        },
                        {
                            type: "radiogroup",
                            name: "question_variant1",
                            startWithNewLine: false,
                            title: "Оцените выполнение варианта 1",
                            hideNumber: true,
                            isRequired: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Задание выполнено легко и быстро"
                                },
                                {
                                    value: "item2",
                                    text: "Задание выполнено, но были вопросы"
                                },
                                {
                                    value: "item3",
                                    text: "Задание не выполнено"
                                }
                            ]
                        },
                        {
                            type: "comment",
                            name: "question_variant1_comment",
                            titleLocation: "hidden",
                            hideNumber: true,
                            placeHolder: "Поясните ответ"
                        }
                    ],
                    title: "Вариант 1"
                },
                {
                    type: "panel",
                    name: "panel4",
                    elements: [
                        {
                            type: "html",
                            name: "question7",
                            html: "<div id=\"variant2\"></div>"
                        },
                        {
                            type: "radiogroup",
                            name: "question_variant2",
                            startWithNewLine: false,
                            title: "Оцените выполнение варианта 1",
                            hideNumber: true,
                            isRequired: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Задание выполнено легко и быстро"
                                },
                                {
                                    value: "item2",
                                    text: "Задание выполнено, но были вопросы"
                                },
                                {
                                    value: "item3",
                                    text: "Задание не выполнено"
                                }
                            ]
                        },
                        {
                            type: "comment",
                            name: "question_variant2_comment",
                            titleLocation: "hidden",
                            hideNumber: true,
                            placeHolder: "Поясните ответ"
                        }
                    ],
                    title: "Вариант 2"
                },
                {
                    type: "panel",
                    name: "panel3",
                    elements: [
                        {
                            type: "html",
                            name: "question5",
                            html: "<div id=\"variant3\"></div>"
                        },
                        {
                            type: "radiogroup",
                            name: "question_variant3",
                            startWithNewLine: false,
                            title: "Оцените выполнение варианта 1",
                            hideNumber: true,
                            isRequired: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Задание выполнено легко и быстро"
                                },
                                {
                                    value: "item2",
                                    text: "Задание выполнено, но были вопросы"
                                },
                                {
                                    value: "item3",
                                    text: "Задание не выполнено"
                                }
                            ]
                        },
                        {
                            type: "comment",
                            name: "question_variant3_comment",
                            titleLocation: "hidden",
                            hideNumber: true,
                            placeHolder: "Поясните ответ"
                        }
                    ],
                    title: "Вариант 3"
                },
                {
                    type: "panel",
                    name: "panel2",
                    elements: [
                        {
                            type: "html",
                            name: "question3",
                            html: "<div id=\"variant4\"></div>"
                        },
                        {
                            type: "radiogroup",
                            name: "question_variant4",
                            startWithNewLine: false,
                            title: "Оцените выполнение варианта 1",
                            hideNumber: true,
                            isRequired: true,
                            choices: [
                                {
                                    value: "item1",
                                    text: "Задание выполнено легко и быстро"
                                },
                                {
                                    value: "item2",
                                    text: "Задание выполнено, но были вопросы"
                                },
                                {
                                    value: "item3",
                                    text: "Задание не выполнено"
                                }
                            ]
                        },
                        {
                            type: "comment",
                            name: "question_variant4_comment",
                            titleLocation: "hidden",
                            hideNumber: true,
                            placeHolder: "Поясните ответ"
                        }
                    ],
                    title: "Вариант 4"
                },
                {
                    type: "panel",
                    name: "panel5",
                    elements: [
                        {
                            type: "rating",
                            name: "chooseVariant",
                            title: "Какой из вариантов реализации вам понравился больше всего",
                            hideNumber: true,
                            isRequired: true,
                            rateMax: 4
                        },
                        {
                            type: "comment",
                            name: "wishes",
                            title: "Напишите пожелания/предложения по реализации управления экспортом",
                            hideNumber: true
                        }
                    ],
                    title: "Общие вопросы"
                }
            ]
        },
    ],
    cookieName: "DevExtreme-Export-Design-Testing"
};

export default json;
