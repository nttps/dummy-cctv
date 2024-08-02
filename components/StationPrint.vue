<template>
    <div>
        <main class="w-full h-[900px]">
            <iframe :src="pdfLink" class="w-full h-full" />
        </main>
    </div>
</template>

<script setup>

    const props = defineProps(['id', 'image', 'cameraStatus'])
    import { _colors } from "#tailwind-config/theme";
    import pdfFonts from "assets/pdfmake/vfs_fonts";
    import { format } from "date-fns";

    const station = ref()
    const cameraStatus = ref(props.cameraStatus)
    const data = await $fetch(`/api/v1/stations/${props.id}`)
    station.value = data

    let pdfLink = ref();

    const loadPdf = () => {
    const { $pdfMake } = useNuxtApp();

    $pdfMake.vfs = pdfFonts ;
    $pdfMake.fonts = {
        THSarabunNew: {
            normal: 'THSarabunNew.ttf',
            bold: 'THSarabunNew Bold.ttf',
            italics: 'THSarabunNew Italic.ttf',
            bolditalics: 'THSarabunNew BoldItalic.ttf'
        },
        Roboto: {
            normal: 'Roboto-Regular.ttf',
            bold: 'Roboto-Medium.ttf',
            italics: 'Roboto-Italic.ttf',
            bolditalics: 'Roboto-MediumItalic.ttf'
        }
    }

    const statusLevel = (value) => {
        switch (value) {
            case 'DANGER':
                return 'วิกฤต'
            case 'WARNING':
                return 'เฝ้าระวัง'
            case 'NORMAL':
                return 'ปกติ'
        }
    }


    $pdfMake.tableLayouts = {
        custom: {
            fillColor: function (rowIndex) {
                return rowIndex % 2 !== 0 ? _colors.slate[50] : null;
            },
            hLineColor: _colors.black,
            vLineColor: _colors.black,
            paddingLeft: function () {
                return 3;
            },
            paddingRight: function () {
                return 10;
            },
        },
    };

    $pdfMake
        .createPdf(
            {
            content: [
                {
                    text: `ณ วันที่ : ${format(new Date(), 'dd/MM/yyyy HH:mm น.') }`,
                    style: { fontSize: 14},
                    alignment: "right",
                    margin: [0, 0, 0, 0],
                },
                {
                    text: "รายงานการสำรวจ",
                    style: { fontSize: 20, bold: true },
                    alignment: "center",
                    margin: [0, 0, 0, 0],
                },
                
                { 
                    text: 'สถานี ' +station.value.name,  
                    style: { fontSize: 20, bold: true }, 
                    alignment: "center",
                    margin: [0, 0, 0, 0] 
                },
                {
                    layout: "custom",
                    table: {
                        widths: ['20%', '80%'],
                        body: [
                            [{ text: 'ที่ตั้ง', bold: true }, station.value.location ],
                            [{ text: 'ละติจูด', bold: true },station.value.latitude],
                            [{ text: 'ลองจิจูด', bold: true }, station.value.longitude],
                            [{ text: 'สถานะ', bold: true },  station.value.status ? 'ออนไลน์' : 'ออฟไลน์' ],
                            [{ text: 'ระดับน้ำ', bold: true },  cameraStatus.value.waterLevelM ],
                            [{ text: 'ระดับการแจ้งเตือนภัย', bold: true },  statusLevel(cameraStatus.value.alertLevel) ]
                        ],
                    },
                    margin: [0, 0, 0, 20],

                },
                { 
                    text: 'แผนที่',  
                    style: { fontSize: 30, bold: true }, 
                    alignment: "center",
                    margin: [0, 0, 0, 0] 
                },
                { 
                    image: props.image,  
                    cover: { width: 500, height: 500, valign: "center", align: "center" },
                    alignment: "center",
                    margin: [0, 0, 0, 30] 
                },
                { 
                    text: `ภาพบันทึก ณ วันที่ : ${cameraStatus.value.timestamp}`,  
                    style: { fontSize: 20, bold: true }, 
                    alignment: "center",
                    margin: [0, 0, 0, 0] 
                },
                { 
                    image: cameraStatus.value.image,  
                    fit:[500, 500],
                    alignment: "center",
                    margin: [0, 0, 0, 30] 
                },
                
               
            ],
            defaultStyle: {
                color: _colors.slate[700],
                font: "THSarabunNew",
                fontSize: 16,
            },
        })
       .getDataUrl((dataUrl) => {
            pdfLink.value = dataUrl;
        });
    };
    onMounted(() => {
        loadPdf();
    });
</script>

<style lang="scss" scoped>

</style>
<style lang="scss" scoped>

</style>