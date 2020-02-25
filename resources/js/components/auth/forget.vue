<template>
	<div>
		<div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                        <div class="card-header">
                        	<h3 class="text-center font-weight-light my-4">Forget Password</h3>
                        </div>
                        <div class="card-body">
                            <form>
                                <div class="form-group">
                                	<label class="small mb-1" for="inputEmailAddress">Existing Email Address</label>
                                	<input class="form-control py-4" id="inputEmailAddress" type="email" placeholder="Enter email address" />
                                </div>
                                <div class="form-group d-flex align-items-center justify-content-between mt-4 mb-0">
                                	<a class="btn btn-primary" href="index.html">Forgot Password</a>
                                </div>
                            </form>
                        </div>
                        <div class="card-footer text-center">
                            <div class="small">
                            	<router-link to="/">Back to login</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	</div>
</template>

<script>

</script>

<style lang="css" scoped>
</style>