$("#grafico").highcharts({
    chart: {
        type: "column"
    },

    title: {
        text: "Percentagem comprometida por pelo menos um ataque bem-sucedido nos últimos 12 meses, por país",
    },
    xAxis: {
        categories: ["Colombia","China","Germany","Mexico","Spain","USA","Saudi Arabia","Italy","Singapore",
            "Canada", "Brazil", "South Africa", "France", "France", "Turkey", "Australia","Japan","UK"]
    },
    yAxis: {
        title: {
            enabled: true,
            text: "Percentagens",
        },
        max: 100
    },
    series: [{
        name: "Percentagem comprometida por pelo menos um ataque bem-sucedido",
        data: [93.9, 91.5, 90.6, 89.8, 89.7, 89.4, 87.8, 85.7, 85.7, 85.3, 83.7, 82.2, 82.0, 81.6, 80.9, 71.1]
    }]
});
$("#grafico2").highcharts({
	chart: { 
		type: "line" 
		},
	title: { 
		text: "Ransom Payments By Quarter" 
		},
	xAxis: { 
		categories: ["Q3 (2018)", "Q4 (2018)", "Q1 (2019)", "Q2 (2019)", "Q3 (2019)", "Q4 (2019)","Q1 (2020)", "Q2(2020)", "Q3(2020)", "Q4 (2020)"]
			},
	yAxis: {
        title: {
            enabled: true,
            text: "Prices",
        },
        max: 250000
    },
	
	series:[
				{ name: "Median Ransom Payment",
					data: [2500, 2800, 2750, 3000, 4000, 45100, 45300, 110000, 115000, 50000]
				},
				{ name: "Average Ransom Payment",
					data: [5000, 5100, 10000, 40000, 45000, 85000, 110000, 160000, 235000, 155000]
				},
			]
});

