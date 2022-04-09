<template>
  <div id="app">
    <v-app id="inspire">
      <v-app id="inspire">
        <v-main>
          <v-container class="fill-height" fluid>
            <v-row align="center" justify="center">
              <v-col cols="12" sm="8" md="4">
                <v-card class="elevation-12">
                  <v-toolbar color="primary" dark flat>
                    <v-toolbar-title>Login form</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-tooltip bottom>
                    </v-tooltip>
                  </v-toolbar>
                  <v-card-text>
                    <v-form>
                      <v-text-field
                        label="Login"
                        name="login"
                        prepend-icon="mdi-account"
                        type="text"
                        v-model="username"
                      ></v-text-field>

                      <v-text-field
                        id="password"
                        label="Password"
                        name="password"
                        prepend-icon="mdi-lock"
                        type="password"
                        v-model="password"
                      ></v-text-field>
                    </v-form>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" @click="login">Login</v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-main>
      </v-app>
    </v-app>
  </div>
</template>


<script>
import http from "../api/http";
export default {
  name: "Login",

  data: function() {
    return {
      // 输入用户名/密码，默认为空
      username: this.input(),
      password: this.input()
    };
  },

  methods: {
    login: function() {
      // 登陆接口
      http.post("/login", {
          username: this.username,
          password: this.password
        })
        .then(res => {
          console.log(res);
          // 如果登陆成功，跳转指定路由页
          if(res.data.errorcode==0){
            // todo jump push用来导向特殊页面
            this.$router.push('testcase')
          }else{
            // 登陆失败用户名、密码错误
            window.alert('username or password error!')
          }
        });
    }
  }
};
</script>

