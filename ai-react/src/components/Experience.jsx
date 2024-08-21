import React from 'react';

export default function Experience() {
    const experiences = [
        {
            company: 'University of Calgary, CA',
            position: 'Postdoc Associate',
            year: '2021 June - 2023 May',
            description: [
                'Developed deep learning models using TensorFlow and Keras to predict induced earthquakes with 90% accuracy, based on over 10,000 seismic events from Alberta\'s Duvernay shale play.',
                'Conducted comparative analysis between traditional and physics-informed deep learning models to uncover relationships between seismic patterns and earthquake magnitudes.',
                'Visualized predictions and correlations using Matplotlib and integrated the model into operational forecasting systems for real-time mitigation.'
            ],
        },
        {
            company: 'The Pennsylvania State University',
            position: 'Research Assistant',
            year: '2020 Jan - 2021 May',
            description: [
                'Developed a supervised machine learning model using XGBoost in Scikit-learn, achieving 90% accuracy in predicting permeability in brittle crusts.',
                'Analyzed hydraulic stimulation data, performed feature importance analysis, and optimized the model through cross-validation and hyperparameter tuning. ',
                'Authored a research paper on the findings (Li & Elsworth, 2022).'
            ],
        },
    ];

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-20'>
            {experiences.map((experience, index) => (
                <div key={index} className='flex flex-col gap-2'>
                    <h1 className='text-xl font-bold'>{experience.company}</h1>
                    <h2 className='text-lg pb-1'>{experience.position}</h2>
                    <h3 className='text-sm pb-1'>{experience.year}</h3>
                    {experience.description.map((paragraph, i) => (
                        <p key={i} className='text-slate-500 text-justify'>
                            {paragraph}
                        </p>
                    ))}
                </div>
            ))}
        </div>
    );
}
