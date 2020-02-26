<template>
	<div>
		<div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header">
                        	<h3 class="text-center font-weight-light my-4">Login</h3>
                        </div>
                        <div class="card-body">
                            <form @submit.prevent="login">
                                <div class="form-group">
                                	<label class="small mb-1" for="inputEmailAddress">Email</label>
                                	<input class="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" v-model="form.email" />
                                </div>
                                <div class="form-group">
                                	<label class="small mb-1" for="inputPassword">Password</label>
                                	<input class="form-control py-4" id="inputPassword" type="password" placeholder="Enter password" v-model="form.password" />
                                </div>
                                <div class="form-group">
                                    <div class="custom-control custom-checkbox">
                                    	<input class="custom-control-input" id="rememberPasswordCheck" type="checkbox" />
                                    	<label class="custom-control-label" for="rememberPasswordCheck">Remember password</label>
                                    </div>
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                	<router-link to="/forget">Forgot Password</router-link>
                                	<button type="submit" class="btn btn-primary">Login</button>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center">
                            <div class="small">
                            	<router-link to="/register">Need an account? Sign up!</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>
import User from '../../Helpers/User.js'
    export default {
        created() {
            if (User.loggedIn()) {
                this.$router.push({ name: 'home' })
            }
        },
        data () {
            return {
                form: {
                    email: null,
                    password: null
                }
            }
        },
        methods: {
            login() {
                axios.post('/api/auth/login',this.form)
                .then(response => {
                    console.log('response', response)
                    User.responseAfterLogin(response.data)
                    this.$router.push({ name: 'home' })
                })
                .catch(error => 
                    console.log(error.response.data)
                )
            }
        }
    }
</script>

<style lang="css" scoped>
</style>
