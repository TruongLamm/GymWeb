<!-- eslint-disable -->
<template>
    <v-card
      class="d-flex align-center justify-center rounded-0 bg"
      width="100vw"
      min-height="100vh"
      height="wrap-content"
    >
        <v-card
            class="pa-10 d-flex flex-column align-center justify-space-between rounded-xl"
            style="background-color: rgba(255, 255, 255, 1); border: 1px solid rgb(183, 180, 180);"
            width="1200px"
            height="auto"
        >
            <form style="width: 100%; display: flex;">
                <v-container>
                    <v-row>
                        <v-col
                        cols="12"
                        sm="6"
                        >
                        <v-text-field
                            name="first_name"
                            :label="this.$t('First name')"
                            value=""
                            color="#000000"
                            class="account_input"
                            type="text"
                            variant="outlined"
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="6"
                        >
                        <v-text-field
                            name="last_name"
                            :label="this.$t('Last Name')"
                            value=""
                            color="#000000"
                            class="account_input"
                            type="text"
                            variant="outlined"
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="6"
                        >
                        <v-text-field
                            name="phone_number"
                            :label="this.$t('Phone Number')"
                            value=""
                            color="#000000"
                            class="account_input"   
                            variant="outlined"
                        ></v-text-field>
                        </v-col>

                        <v-col
                        cols="12"
                        sm="6"
                        >
                        <v-text-field
                            name="birthday"
                            :label="this.$t('Birthday')"
                            type="date"
                            value=""
                            color="#000000"
                            class="account_input"   
                            variant="outlined"
                        ></v-text-field>
                        </v-col>

                        <v-col
                            cols="12"
                            sm="6"
                            >
                            <!-- row 4 -->
                            <v-row>
                                <v-col
                                cols="12"
                                sm="6"
                                >
                                <v-select
                                    name="gender"
                                    :label="this.$t('Gender')"
                                    :items="gender"
                                    density="comfortable"
                                    color="#000000"
                                    class="account_input" 
                                ></v-select>
                                </v-col>

                                <v-col
                                cols="12"
                                sm="6"
                                >
                                <v-select
                                    name="working_level"
                                    :label="this.$t('Working Level')"
                                    :items="working_level"
                                    density="comfortable"
                                    color="#000000"
                                    class="account_input" 
                                ></v-select>
                                </v-col>
                                <v-col
                                cols="12"
                                sm="6"
                                >
                                <v-text-field
                                    name="weight"
                                    :label="this.$t('Weight')"
                                    type="number"
                                    min=0
                                    oninput="if (this.value < 0) this.value = 0;"
                                    value=""
                                    color="#000000"
                                    class="account_input"   
                                    variant="outlined"
                                ></v-text-field>
                                </v-col>

                                <v-col
                                cols="12"
                                sm="6"
                                >
                                <v-text-field
                                    name="height"
                                    :label="this.$t('Height')"
                                    type="number"
                                    min=0
                                    oninput="if (this.value < 0) this.value = 0;"
                                    value=""
                                    color="#000000"
                                    class="account_input"   
                                    variant="outlined"
                                ></v-text-field>
                                </v-col>
                            </v-row>
                            <!-- row 4 -->
                        </v-col>

                        <v-col
                        cols="12"
                        sm="6"
                        >
                        <v-text-field
                            name="email"
                            :label="this.$t('Email')"
                            value=""
                            color="#000000"
                            class="account_input"
                            variant="outlined"
                            :rules="[rules.required, rules.email]"
                        ></v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <picture-input
                    ref="pictureInput"
                    @change="onChanged"
                    @remove="onRemoved"
                    :width="150"
                    :removable="true"
                    removeButtonClass="ui orange button"
                    :height="150"
                    accept="image/jpeg, image/png, image/gif"
                    buttonClass="ui button primary"
                    :customStrings="{ upload: '<h1>Upload it!</h1>', drag: 'Drag and drop your image here'}"
                    :radius="50"
                    class="picture_input"
                    >
                </picture-input>
            </form>
        </v-card>
        <v-btn
          elevation="2"
          :loading="loader"
          :disabled="loading"
          @click="loader = 'loading'"
          class="btn_save"
          >
          Save
          </v-btn>
    </v-card>
  </template>
<!-- eslint-disable -->
  <script>
    import PictureInput from 'vue-picture-input';

    export default {
    components: {
        PictureInput,
    },
    methods: {
      onChange () {
        console.log('New picture selected!')
        if (this.$refs.pictureInput.image) {
          console.log('Picture loaded.')
        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      },
      onRemoved() {
      // Handle remove event
      },
    },
    data () {
      return {
        email: '',
        gender: ['Male', 'Female'],
        working_level: ['Level 1', 'Level 2', 'Level 3', 'Level 4', 'Level 5'],
        rules: {
          required: value => !!value || 'Required.',
          email: value => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Invalid e-mail.'
          },
        },
      }
    },
  }
  </script>
  
<style scoped lang="scss">
  .bg {
    flex-direction: column;
    background-size: cover;
    font-family: "Poppins", sans-serif;
  }
  .btn_save{
    background-color: #FF4601 !important;
    color: white;
    border-radius: 10px;
    padding: 7px 20px;
    width: 500px !important;
    height: 70px !important;
    flex-shrink: 0;
    font-size: 30px;
    font-style: normal;
    letter-spacing: normal;
    font-weight: 500;
    text-transform: inherit;
    margin-top: 40px;
  }
.picture_input{
  max-width: 250px;
  margin-top: 30px;
}
</style>
  