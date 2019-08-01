<template>
    <div class="container">
         <md-speed-dial class="speed-dial" md-direction="bottom">
            <md-speed-dial-target class="md-primary">
                <md-icon>more_vert</md-icon>
            </md-speed-dial-target>

            <md-speed-dial-content>
                <md-button class="md-icon-button">
                    <md-icon>add</md-icon>
                    <md-tooltip md-direction="right">New</md-tooltip>
                </md-button>

                <md-button class="md-icon-button" @click="uploadFile()">
                    <md-icon>cloud_upload</md-icon>
                    <md-tooltip md-direction="right">Upload</md-tooltip>
                    <input ref="fileinput" type="file" accept="*.json" style="display: none" @change="loadFile" />
                </md-button>

                <md-button class="md-icon-button" @click="menuVisible = !menuVisible">
                    <md-icon>cloud_download</md-icon>
                    <md-tooltip md-direction="right">Download</md-tooltip>
                </md-button>
            </md-speed-dial-content>
        </md-speed-dial>
        <div class="content" ref="paperContainer">
            
        </div>
    </div>
</template>

<script lang="ts" src="./index.ts" />

<style lang="scss" scoped src="./theme.scss" />
