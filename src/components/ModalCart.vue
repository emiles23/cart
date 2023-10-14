<template>
    <div class="absolute inset-0 overflow-hidden">
        <div class="fixed inset-y-0 right-0 flex max-w-full pl-10">
            <div class="max-w-md"> 
                <div class="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div class="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                        <slot>
                        </slot>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>