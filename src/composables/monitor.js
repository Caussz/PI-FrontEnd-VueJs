import {
    defineAsyncComponent,
    onMounted,
    onUnmounted,
    ref,
    shallowRef,
} from 'vue';

export function useMonitor() {
    const breakpoint = ref('sm');
    const login = shallowRef(
        defineAsyncComponent(() => import('../components/Login/LoginDesktop.vue')),
    );

    const updateBreakpoint = () => {
        const width = window.innerWidth;
        if (width < 768) {
            breakpoint.value = 'sm';
            login.value = defineAsyncComponent(() =>
                import('../components/Login/FormLogin.vue'),
            );
        }
        else {
            breakpoint.value = 'xl';
            login.value = defineAsyncComponent(() =>
                import('../components/Login/LoginDesktop.vue'),
            );
        }
    };

    onMounted(() => {
        updateBreakpoint();
        window.addEventListener('resize', updateBreakpoint);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', updateBreakpoint);
    });

    return {
        breakpoint,
        login,
    };
}