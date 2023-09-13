"use client"
import { useTranslation } from 'react-i18next';
import React, { useState } from 'react';

const Filter = ({ onFilterChange }) => {
    const { t } = useTranslation()

    const [filterValue, setFilterValue] = useState('plantes');
    const [activeButton, setActiveButton] = useState('plantes');
    
    const handleButtonClick = (value) => {
        setFilterValue(value);
        setActiveButton(value);
        onFilterChange(value); // Pass the filter value to the parent component
    };

    return (
        <>
          <div className="btn-group">
            <button
                className={`btn ${activeButton === 'plantes' ? 'btn-active' : ''}`}
                style={{
                    backgroundColor: activeButton === 'plantes' ? 'rgb(153 27 27)' : '',
                    borderColor: activeButton === 'plantes' ? 'rgb(153 27 27)' : '',
                    color: activeButton === 'plantes' ? 'white' : ''
                }}
                onClick={() => handleButtonClick('plantes')}
                >{t("filters.plants.title")}
            </button>
            <button
                className={`btn ${activeButton === 'utilisation' ? 'btn-active' : ''}`}
                style={{
                    backgroundColor: activeButton === 'utilisation' ? 'rgb(153 27 27)' : '',
                    borderColor: activeButton === 'utilisation' ? 'rgb(153 27 27)' : '',
                    color: activeButton === 'utilisation' ? 'white' : ''
                }}
                onClick={() => handleButtonClick('utilisation')}
                >{t("filters.usage.title")}
            </button>
            <button
                className={`btn ${activeButton === 'semis' ? 'btn-active' : ''}`}
                style={{
                    backgroundColor: activeButton === 'semis' ? 'rgb(153 27 27)' : '',
                    borderColor: activeButton === 'semis' ? 'rgb(153 27 27)' : '',
                    color: activeButton === 'semis' ? 'white' : ''
                }}
                onClick={() => handleButtonClick('semis')}
                >{t("filters.seedling.title")}
            </button>
            <button
                className={`btn ${activeButton === 'recolte' ? 'btn-active' : ''}`}
                style={{
                    backgroundColor: activeButton === 'recolte' ? 'rgb(153 27 27)' : '',
                    borderColor: activeButton === 'recolte' ? 'rgb(153 27 27)' : '',
                    color: activeButton === 'recolte' ? 'white' : ''
                }}
                onClick={() => handleButtonClick('recolte')}
                >{t("filters.harvest.title")}
            </button>
          </div>
        </>
      );
    };

export default Filter;