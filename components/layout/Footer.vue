<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="footer-content text-center py-4">
                        <div class="copyright">
                            ©{{ year }} Vincent Capek — All Rights Reserved.
                            <a href="https://github.com/VincentCapek" target="_blank"
                                rel="noopener noreferrer">GitHub</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear()
</script>