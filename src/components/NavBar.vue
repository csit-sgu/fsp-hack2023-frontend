<template>
    <!-- FIX: width overflow -->
    <b-navbar fixed-top=true transparent=true >
        <template #brand>
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img src="@/assets/images/logo.png">
            </b-navbar-item>
        </template>
        <template #start>
            <b-navbar-item href="#">
                Главная
            </b-navbar-item>
            <b-navbar-item href="#/competitions">
                Соревнования
            </b-navbar-item>
            <b-navbar-dropdown label="Info">
                <b-navbar-item href="#">
                    About
                </b-navbar-item>
                <b-navbar-item href="#">
                    Contact
                </b-navbar-item>
            </b-navbar-dropdown>
        </template>

        <template #end>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Зарегистрироваться</strong>
                    </a>
                    <a class="button is-light">
                        Войти
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script lang="ts">
  export default {};
</script>