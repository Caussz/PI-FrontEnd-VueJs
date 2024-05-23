<template>
    <main>
        <span>zyra.</span>
    </main>
</template>

<style scoped>
main {
    display: flex;
    position: absolute;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    animation: loadingAnim 1s backwards ease-in-out;
    right: 100%;
    z-index: 5;
}

@keyframes loadingAnim{
    0%,25%{
        right: 0;
    }
    100%{
        right: 100%;
    }
}
span {
    color: var(--text-loading-color);
    rotate:270deg;
    font-family: "Kodchasan", sans-serif;
    font-size: 6rem;
    font-weight: 400;

}
span::before, span::after{
    content: "";
    display: block;
    height: 0;
    width: 0;
}
span::before{
    margin-top: -2rem;
}
</style>