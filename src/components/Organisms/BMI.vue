<!-- eslint-disable -->
<template>
    <section class="bmi-style">
        <div class="bmi-content">
            <span class="content-title">Calculate your BMI</span>
            <span class="content-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget lectus urna. Nulla magna tortor, bibendum in molestie sed, gravida nec felis. Sed id egestasegestas risus, ut imperdiet augue.</span>
            <v-btn
                class="bmi-btn-clc"
                >
                Calculate BMI
            </v-btn>
        </div>
        <div class="bmi-dislay">
            <img class="dislay-img" src="../../assets/icon/Main_Eclipse.svg" alt="Main_Eclipse.svg">
            <span class="display-desc">You have Obese body weight!</span>
        </div>
    </section>
  </template>
<!-- eslint-disable -->
  <style scoped lang="scss">
    .bmi-style{
        background-color: #FF4300;
        font-family: "Poppins", sans-serif;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 112px 238px 76px;

        .bmi-content{
            display: flex;
            flex-direction: column;
            .content-title{
                color: #FFF;
                font-size: 40px;
                font-style: normal;
                font-weight: 700;
                line-height: normal;
                padding-bottom: 5px;
            }
            .content-desc{
                width: 489px;
                flex-shrink: 0;
                color: #FFF;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 37px; /* 231.25% */
                padding-bottom: 20px;
            }
            .bmi-btn-clc{
                background-color: transparent;
                color: #FFFFFF;
                border-radius: 38.5px;
                border: 1px solid #FFFFFF;
                padding: 10px 20px; /* Adjust padding as needed */
                width: 237px;
                height: 68px;
                font-size: 16px;
                font-style: normal;
                font-weight: 600;
                text-transform: initial;
            }
        }
        .bmi-dislay{
            display: flex;
            flex-direction: column;
            align-items: center;
            .dislay-img{
                border-radius: 289px;
                background: rgba(238, 238, 238, 0.09);
                box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.25);
            }
            .display-desc{
                color: rgba(255, 255, 255, 0.90);
                font-size: 20px;
                font-style: normal;
                font-weight: 600;
                line-height: normal;
                padding-top: 33px;
            }
        }
    }
  </style>
  