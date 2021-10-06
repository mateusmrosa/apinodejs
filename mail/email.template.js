
function enviarArqEmailAtivaConta(dados, token) {
    return html = `<style type="text/css">
    /*** BMEMBF Start ***/
    [name=bmeMainBody] {
        min-height: 1000px;
    }

    @media only screen and (max-width: 480px) {

        table.blk,
        table.tblText,
        .bmeHolder,
        .bmeHolder1,
        table.bmeMainColumn {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeImageCard table.bmeCaptionTable td.tblCell {
            padding: 0px 20px 20px 20px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td.tblCell {
            padding: 20px 20px 0 20px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        table.bmeCaptionTable td.tblCell {
            padding: 10px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        table.tblGtr {
            padding-bottom: 20px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        td.blk_container,
        .blk_parent,
        .bmeLeftColumn,
        .bmeRightColumn,
        .bmeColumn1,
        .bmeColumn2,
        .bmeColumn3,
        .bmeBody {
            display: table !important;
            max-width: 600px !important;
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        table.container-table,
        .bmeheadertext,
        .container-table {
            width: 95% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mobile-footer,
        .mobile-footer a {
            font-size: 13px !important;
            line-height: 18px !important;
        }

        .mobile-footer {
            text-align: center !important;
        }

        table.share-tbl {
            padding-bottom: 15px;
            width: 100% !important;
        }

        table.share-tbl td {
            display: block !important;
            text-align: center !important;
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        td.bmeShareTD,
        td.bmeSocialTD {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        td.tdBoxedTextBorder {
            width: auto !important;
        }
    }

    @media only screen and (max-width: 480px) {

        table.blk,
        table[name=tblText],
        .bmeHolder,
        .bmeHolder1,
        table[name=bmeMainColumn] {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeImageCard table.bmeCaptionTable td[name=tblCell] {
            padding: 0px 20px 20px 20px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell] {
            padding: 20px 20px 0 20px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        table.bmeCaptionTable td[name=tblCell] {
            padding: 10px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        table[name=tblGtr] {
            padding-bottom: 20px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        td.blk_container,
        .blk_parent,
        [name=bmeLeftColumn],
        [name=bmeRightColumn],
        [name=bmeColumn1],
        [name=bmeColumn2],
        [name=bmeColumn3],
        [name=bmeBody] {
            display: table !important;
            max-width: 600px !important;
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        table[class=container-table],
        .bmeheadertext,
        .container-table {
            width: 95% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .mobile-footer,
        .mobile-footer a {
            font-size: 13px !important;
            line-height: 18px !important;
        }

        .mobile-footer {
            text-align: center !important;
        }

        table[class="share-tbl"] {
            padding-bottom: 15px;
            width: 100% !important;
        }

        table[class="share-tbl"] td {
            display: block !important;
            text-align: center !important;
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        td[name=bmeShareTD],
        td[name=bmeSocialTD] {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        td[name=tdBoxedTextBorder] {
            width: auto !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeImageCard table.bmeImageTable {
            height: auto !important;
            width: 100% !important;
            padding: 20px !important;
            clear: both;
            float: left !important;
            border-collapse: separate;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblInline table.bmeImageTable {
            height: auto !important;
            width: 100% !important;
            padding: 10px !important;
            clear: both;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblInline table.bmeCaptionTable {
            width: 100% !important;
            clear: both;
        }
    }

    @media only screen and (max-width: 480px) {
        table.bmeImageTable {
            height: auto !important;
            width: 100% !important;
            padding: 10px !important;
            clear: both;
        }
    }

    @media only screen and (max-width: 480px) {
        table.bmeCaptionTable {
            width: 100% !important;
            clear: both;
        }
    }

    @media only screen and (max-width: 480px) {
        table.bmeImageContainer {
            width: 100% !important;
            clear: both;
            float: left !important;
        }
    }

    @media only screen and (max-width: 480px) {
        table.bmeImageTable td {
            padding: 0px !important;
            height: auto;
        }
    }

    @media only screen and (max-width: 480px) {
        td.bmeImageContainerRow {
            padding: 0px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        img.mobile-img-large {
            width: 100% !important;
            height: auto !important;
        }
    }

    @media only screen and (max-width: 480px) {
        img.bmeRSSImage {
            max-width: 320px;
            height: auto !important;
        }
    }

    @media only screen and (min-width: 640px) {
        img.bmeRSSImage {
            max-width: 600px !important;
            height: auto !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .trMargin img {
            height: 10px;
        }
    }

    @media only screen and (max-width: 480px) {

        div.bmefooter,
        div.bmeheader {
            display: block !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .tdPart {
            width: 100% !important;
            clear: both;
            float: left !important;
        }
    }

    @media only screen and (max-width: 480px) {

        table.blk_parent1,
        table.tblPart {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .tblLine {
            min-width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblCenter img {
            margin: 0 auto;
        }
    }

    @media only screen and (max-width: 480px) {

        .bmeMblCenter,
        .bmeMblCenter div,
        .bmeMblCenter span {
            text-align: center !important;
            text-align: -webkit-center !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .bmeNoBr br,
        .bmeImageGutterRow,
        .bmeMblStackCenter .bmeShareItem .tdMblHide {
            display: none !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .bmeMblInline table.bmeImageTable,
        .bmeMblInline table.bmeCaptionTable,
        td.bmeMblInline {
            clear: none !important;
            width: 50% !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .bmeMblInlineHide,
        .bmeShareItem .trMargin {
            display: none !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .bmeMblInline table.bmeImageTable img,
        .bmeMblShareCenter.tblContainer.mblSocialContain,
        .bmeMblFollowCenter.tblContainer.mblSocialContain {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblStack>.bmeShareItem {
            width: 100% !important;
            clear: both !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeShareItem {
            padding-top: 10px !important;
        }
    }

    @media only screen and (max-width: 480px) {

        .tdPart.bmeMblStackCenter,
        .bmeMblStackCenter .bmeFollowItemIcon {
            padding: 0px !important;
            text-align: center !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblStackCenter>.bmeShareItem {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        td.bmeMblCenter {
            border: 0 none transparent !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeLinkTable.tdPart td {
            padding-left: 0px !important;
            padding-right: 0px !important;
            border: 0px none transparent !important;
            padding-bottom: 15px !important;
            height: auto !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .tdMblHide {
            width: 10px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeShareItemBtn {
            display: table !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblStack td {
            text-align: left !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblStack .bmeFollowItem {
            clear: both !important;
            padding-top: 10px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblStackCenter .bmeFollowItemText {
            padding-left: 5px !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .bmeMblStackCenter .bmeFollowItem {
            clear: both !important;
            align-self: center;
            float: none !important;
            padding-top: 10px;
            margin: 0 auto;
        }
    }

    @media only screen and (max-width: 480px) {
        .tdPart>table {
            width: 100% !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .tdPart>table.bmeLinkContainer {
            width: auto !important;
        }
    }

    @media only screen and (max-width: 480px) {
        .tdPart.mblStackCenter>table.bmeLinkContainer {
            width: 100% !important;
        }
    }

    .blk_parent:first-child,
    .blk_parent {
        float: left;
    }

    .blk_parent:last-child {
        float: right;
    }

    /*** BMEMBF END ***/

    table[name="bmeMainBody"],
    body {
        background-color: #2f2f2f;
    }

    td[name="bmePreHeader"] {
        background-color: #00ae54;
    }

    td[name="bmeHeader"] {
        background: #ffffff;
        background-color: #00ae54;
    }

    td[name="bmeBody"],
    table[name="bmeBody"] {
        background-color: #ffffff;
    }

    td[name="bmePreFooter"] {
        background-color: #ffffff;
    }

    td[name="bmeFooter"] {
        background-color: #ffffff;
    }

    td[name="tblCell"],
    .blk {
        font-family: initial;
        font-weight: normal;
        font-size: initial;
    }

    table[name="blk_blank"] td[name="tblCell"] {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
    }

    [name=bmeMainContentParent] {
        border-color: #666666;
        border-width: 0px;
        border-style: none;
        border-radius: 0px;
        border-collapse: separate;
        border-spacing: 0px;
        overflow: hidden;
    }

    [name=bmeMainColumnParent] {
        border-color: transparent;
        border-width: 0px;
        border-style: none;
        border-radius: 0px;
    }

    [name=bmeMainColumn] {
        border-color: transparent;
        border-width: 0px;
        border-style: none;
        border-radius: 0px;
        border-collapse: separate;
        border-spacing: 0px;
    }

    [name=bmeMainContent] {
        border-color: transparent;
        border-width: 0px;
        border-style: none;
        border-radius: 0px;
        border-collapse: separate;
        border-spacing: 0px;
    }
    .negrito{
        font-weight: bold;
    }
</style>

<body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style="height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;">

<table width="100%" cellspacing="0" cellpadding="0" border="0" name="bmeMainBody" style="background-color: rgb(47, 47, 47);" bgcolor="#2f2f2f">
    <tbody>
        <tr>
            <td width="100%" valign="top" align="center">
                <table cellspacing="0" cellpadding="0" border="0" name="bmeMainColumnParentTable">
                    <tbody>
                        <tr>
                            <td name="bmeMainColumnParent"
                                style="border: 0px none transparent; border-radius: 0px; border-collapse: separate;">
                                <table name="bmeMainColumn" class="bmeHolder bmeMainColumn" style="max-width: 600px; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td width="100%" class="blk_container bmeHolder" name="bmePreHeader" valign="top" align="center" style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(238, 146, 40);" bgcolor="#00ae54"></td>
                                        </tr>
                                        <tr>
                                            <td width="100%" class="bmeHolder" valign="top" align="center" name="bmeMainContentParent" style="border: 0px none rgb(102, 102, 102); border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: hidden;">
                                                <table name="bmeMainContent" style="border-radius: 0px; border-collapse: separate; border-spacing: 0px; border: 0px none transparent;"  width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder" name="bmeHeader" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(238, 146, 40);" bgcolor="#00ae54">
                                                                <div id="dv_1" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" align="left" name="tblCell" style="padding: 15px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                                    <div style="line-height: 200%; text-align: right;">
                                                                                                                
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder bmeBody" name="bmeBody" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                                <div id="dv_15" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain" style="padding: 10px 0px;">
                                                                                    <table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 0px; border-top-style: none; min-width: 1px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_11" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_image">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="bmeImage" style="border-collapse: collapse; padding: 20px;">
                                                                                                    <img src="http://foodtok.com.br:3000/uploads/2021-02-16T19-58-27.783Z-0000000 logobr.png" width="52" style="width:200px; display: block;" alt="" border="0">
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_17" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0"  width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" align="left" name="tblCell" style="padding: 10px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                                    <div
                                                                                                                        style="line-height: 150%; text-align: center;">
                                                                                                                        <h1 style="color: #464646; line-height: 150%;"><strong> Olá, ${dados.vennome}.</strong></h2>
                                                                                                                        <br>
                                                                                                                            <p style="text-align: justify; font-size: 14px; font-family: Arial, Helvetica, sans-serif; color: #464646; line-height: 150%;">
                                                                                                                            
                                                                                                                            
                                                                                                                                Seja bem-vindo(a) ao FoodTok!
                                                                                                                           
                                                                                                                            <br>

                                                                                                                                Vimos que você começou a experimentar nossa plataforma e que seu cardápio logo mais estará pronto para fazer sucesso com seus clientes, tendo os pedidos facilmente direcionados ao WhatsApp de sua loja. Incrível não é?
                                                                                                                        
                                                                                                                                A Foodtok está saindo do forno e queremos começar com tudo! Para isso acontecer fornecemos um suporte acessível através desta caixa de e-mail: 
                                                                                                                                    
                                                                                                                                contato@foodtok.com.br.<br>
                                                                                                                                    
                                                                                                                                Caso tenha qualquer dificuldade ou dúvida pode contar conosco.
                                                                                                                        
                                                                                                                                Enquanto isso, para começarmos com essa experiência, clique no link abaixo para ativar sua conta. 

                                                                                                                            </p>
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_18" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_button" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="20"></td>
                                                                                <td align="center">
                                                                                    <table class="tblContainer" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td height="15">
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeButton" align="center" style="border-collapse: separate;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="border-radius: 0px; border: 3px solid rgb(238, 146, 40); background-color: rgb(238, 146, 40); border-radius: 5px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding: 15px 30px; font-weight: bold; border-collapse: separate;"
                                                                                                                    class="bmeButtonText">
                                                                                                                    <span style="font-family: 'Courier New', Courier; font-size: 14px; color:#fff;">
                                                                                                                        <a href="http://foodtok.com.br/valida/token=${token}" name="token" style="font-size: 18px; color:#fff; text-decoration: none; cursor: pointer;" target="_blank">
                                                                                                                            ATIVAR CONTA
                                                                                                                        </a>
                                                                                                                    </span>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td height="15">
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                                <td width="20"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder" name="bmePreFooter" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                                <div id="dv_5" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" align="left" name="tblCell" style="padding: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_9" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain"
                                                                                    style="padding: 10px 20px;">
                                                                                    <table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 0px; border-top-style: none; min-width: 1px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_14" class="blk_wrapper" style="">
                                                                    <table cellspacing="0" cellpadding="0" border="0" style="" name="blk_social_follow" width="600" class="blk">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain" align="center" style="padding-top:20px; padding-bottom:20px; padding-left:20px; padding-right:20px;">
                                                                                    <table class="tblContainer mblSocialContain" cellspacing="0" cellpadding="0" border="0" align="center" style="text-align:center;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdItemContainer">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="mblSocialContain" style="table-layout: auto;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" name="bmeSocialTD" class="bmeSocialTD">
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0"
                                                                                                                        border="0" class="bmeFollowItem" type="facebook" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="padding-right:20px;height:20px;">
                                                                                                                                    <a href="http://benchmarkemail.benchurl.com/c/l?u=5EE6FDB&e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&seq=1" target=_blank style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgba(0, 0, 0, 0);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/fb_btn.png" alt="Facebook" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeFollowItem" type="twitter" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="padding-right:20px;height:20px;">
                                                                                                                                    <a href="http://benchmarkemail.benchurl.com/c/l?u=5EE6FDD&e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&seq=1" target=_blank style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgba(0, 0, 0, 0);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/tw_btn.png" alt="Twitter" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeFollowItem" type="email" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="height:20px;">
                                                                                                                                    <a href="mailto:"style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgb(0, 0, 238);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/em_btn.png" alt="Email" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_10" class="blk_wrapper" style="">
                                                                    <table cellspacing="0" cellpadding="0" border="0" name="blk_divider" width="600" class="blk">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style="padding: 10px 0px;" class="tblCellMain">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top-width: 0px; border-top-style: none; min-width: 1px;" class="tblLine">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="100%" class="blk_container bmeHolder" name="bmeFooter" valign="top" align="center" style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                <div id="dv_3" class="blk_wrapper">
                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_permission" style="">
                                                        <tbody>
                                                            <tr>
                                                                <td name="tblCell" class="tblCell" style="padding:20px;" valign="top" align="left"> 
                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td name="bmePermissionText" style="text-align:center;" align="center"><span style="font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px;line-height: 140%;"> <a style="color: #16a7e0;" target="_new" href="">Aqui você pode desinscrever-se</a>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</body>`
}
module.exports.enviarArqEmailAtivaConta = enviarArqEmailAtivaConta


function enviarArqEmailResetSenha(dados, token) {
    return html =
        `<style type="text/css">
        /*** BMEMBF Start ***/
        [name=bmeMainBody] {
            min-height: 1000px;
        }

        @media only screen and (max-width: 480px) {

            table.blk,
            table.tblText,
            .bmeHolder,
            .bmeHolder1,
            table.bmeMainColumn {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td.tblCell {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td.tblCell {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td.tblCell {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.tblGtr {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td.blk_container,
            .blk_parent,
            .bmeLeftColumn,
            .bmeRightColumn,
            .bmeColumn1,
            .bmeColumn2,
            .bmeColumn3,
            .bmeBody {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table.container-table,
            .bmeheadertext,
            .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .mobile-footer,
            .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table.share-tbl {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table.share-tbl td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td.bmeShareTD,
            td.bmeSocialTD {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.tdBoxedTextBorder {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table.blk,
            table[name=tblText],
            .bmeHolder,
            .bmeHolder1,
            table[name=bmeMainColumn] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td[name=tblCell] {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell] {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td[name=tblCell] {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table[name=tblGtr] {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td.blk_container,
            .blk_parent,
            [name=bmeLeftColumn],
            [name=bmeRightColumn],
            [name=bmeColumn1],
            [name=bmeColumn2],
            [name=bmeColumn3],
            [name=bmeBody] {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table[class=container-table],
            .bmeheadertext,
            .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .mobile-footer,
            .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table[class="share-tbl"] {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table[class="share-tbl"] td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td[name=bmeShareTD],
            td[name=bmeSocialTD] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td[name=tdBoxedTextBorder] {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 20px !important;
                clear: both;
                float: left !important;
                border-collapse: separate;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageContainer {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable td {
                padding: 0px !important;
                height: auto;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeImageContainerRow {
                padding: 0px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            img.mobile-img-large {
                width: 100% !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            img.bmeRSSImage {
                max-width: 320px;
                height: auto !important;
            }
        }

        @media only screen and (min-width: 640px) {
            img.bmeRSSImage {
                max-width: 600px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .trMargin img {
                height: 10px;
            }
        }

        @media only screen and (max-width: 480px) {

            div.bmefooter,
            div.bmeheader {
                display: block !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table.blk_parent1,
            table.tblPart {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tblLine {
                min-width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblCenter img {
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblCenter,
            .bmeMblCenter div,
            .bmeMblCenter span {
                text-align: center !important;
                text-align: -webkit-center !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeNoBr br,
            .bmeImageGutterRow,
            .bmeMblStackCenter .bmeShareItem .tdMblHide {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblInline table.bmeImageTable,
            .bmeMblInline table.bmeCaptionTable,
            td.bmeMblInline {
                clear: none !important;
                width: 50% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblInlineHide,
            .bmeShareItem .trMargin {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblInline table.bmeImageTable img,
            .bmeMblShareCenter.tblContainer.mblSocialContain,
            .bmeMblFollowCenter.tblContainer.mblSocialContain {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack>.bmeShareItem {
                width: 100% !important;
                clear: both !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItem {
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .tdPart.bmeMblStackCenter,
            .bmeMblStackCenter .bmeFollowItemIcon {
                padding: 0px !important;
                text-align: center !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter>.bmeShareItem {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeMblCenter {
                border: 0 none transparent !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeLinkTable.tdPart td {
                padding-left: 0px !important;
                padding-right: 0px !important;
                border: 0px none transparent !important;
                padding-bottom: 15px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdMblHide {
                width: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItemBtn {
                display: table !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack td {
                text-align: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack .bmeFollowItem {
                clear: both !important;
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItemText {
                padding-left: 5px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItem {
                clear: both !important;
                align-self: center;
                float: none !important;
                padding-top: 10px;
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart>table {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart>table.bmeLinkContainer {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart.mblStackCenter>table.bmeLinkContainer {
                width: 100% !important;
            }
        }

        .blk_parent:first-child,
        .blk_parent {
            float: left;
        }

        .blk_parent:last-child {
            float: right;
        }

        /*** BMEMBF END ***/

        table[name="bmeMainBody"],
        body {
            background-color: #2f2f2f;
        }

        td[name="bmePreHeader"] {
            background-color: #00ae54;
        }

        td[name="bmeHeader"] {
            background: #ffffff;
            background-color: #00ae54;
        }

        td[name="bmeBody"],
        table[name="bmeBody"] {
            background-color: #ffffff;
        }

        td[name="bmePreFooter"] {
            background-color: #ffffff;
        }

        td[name="bmeFooter"] {
            background-color: #ffffff;
        }

        td[name="tblCell"],
        .blk {
            font-family: initial;
            font-weight: normal;
            font-size: initial;
        }

        table[name="blk_blank"] td[name="tblCell"] {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }

        [name=bmeMainContentParent] {
            border-color: #666666;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
            overflow: hidden;
        }

        [name=bmeMainColumnParent] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
        }

        [name=bmeMainColumn] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
        }

        [name=bmeMainContent] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
        }
        .negrito{
            font-weight: bold;
        }
</style>

<body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style="height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;">

<table width="100%" cellspacing="0" cellpadding="0" border="0" name="bmeMainBody" style="background-color: rgb(47, 47, 47);" bgcolor="#2f2f2f">
    <tbody>
        <tr>
            <td width="100%" valign="top" align="center">
                <table cellspacing="0" cellpadding="0" border="0" name="bmeMainColumnParentTable">
                    <tbody>
                        <tr>
                            <td name="bmeMainColumnParent"
                                style="border: 0px none transparent; border-radius: 0px; border-collapse: separate;">
                                <table name="bmeMainColumn" class="bmeHolder bmeMainColumn" style="max-width: 600px; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td width="100%" class="blk_container bmeHolder" name="bmePreHeader" valign="top" align="center" style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(238, 146, 40);" bgcolor="#00ae54"></td>
                                        </tr>
                                        <tr>
                                            <td width="100%" class="bmeHolder" valign="top" align="center" name="bmeMainContentParent" style="border: 0px none rgb(102, 102, 102); border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: hidden;">
                                                <table name="bmeMainContent" style="border-radius: 0px; border-collapse: separate; border-spacing: 0px; border: 0px none transparent;"  width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder" name="bmeHeader" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(238, 146, 40);" bgcolor="#00ae54">
                                                                <div id="dv_1" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" align="left" name="tblCell" style="padding: 15px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                                    <div style="line-height: 200%; text-align: right;">
                                                                                                                
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder bmeBody" name="bmeBody" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                                <div id="dv_15" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain" style="padding: 10px 0px;">
                                                                                    <table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 0px; border-top-style: none; min-width: 1px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_11" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_image">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="bmeImage" style="border-collapse: collapse; padding: 20px;">
                                                                                                    <img src="http://foodtok.com.br:3000/uploads/2021-02-16T19-58-27.783Z-0000000 logobr.png" width="52" style="width:200px; display: block;" alt="" border="0">
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_17" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0"  width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                    <tbody>
                                                                                                    <tr>
                                                                                                        <td valign="top" align="left" name="tblCell" style="padding: 10px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                            <div
                                                                                                                style="line-height: 150%; text-align: center;">
                                                                                                                <h1 style="color: #464646; line-height: 150%;"><strong> Olá, ${dados.vennome}.</strong></h2>
                                                                                                                <br>
                                                                                                                    <p style="text-align: center; font-size: 14px; font-family: Arial, Helvetica, sans-serif; color: #464646; line-height: 150%;">
                                                                                                                        Sem problemas. Clique no botão abaixo para redefinir sua senha!
                                                                                                                    </p>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_18" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_button" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td width="20"></td>
                                                                                <td align="center">
                                                                                    <table class="tblContainer" cellspacing="0" cellpadding="0" border="0" width="100%">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td height="15">
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeButton" align="center" style="border-collapse: separate;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td style="border-radius: 0px; border: 3px solid rgb(238, 146, 40); background-color: rgb(238, 146, 40); border-radius: 5px; text-align: center; font-family: Arial, Helvetica, sans-serif; font-size: 14px; padding: 15px 30px; font-weight: bold; border-collapse: separate;"
                                                                                                                    class="bmeButtonText">
                                                                                                                    <span style="font-family: 'Courier New', Courier; font-size: 14px; color:#fff;">
                                                                                                                        <a href="http://foodtok.com.br/validars/token=${token}" name="token" style="font-size: 18px; color:#fff; text-decoration: none; cursor: pointer;" target="_blank">
                                                                                                                            RESETAR SENHA
                                                                                                                        </a>
                                                                                                                    </span>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                            <tr>
                                                                                                <td height="15">
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                                <td width="20"></td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>

                                                            </td>
                                                        </tr>
                                                    
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder" name="bmePreFooter" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                                <div id="dv_5" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" align="left" name="tblCell" style="padding: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_9" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain"
                                                                                    style="padding: 10px 20px;">
                                                                                    <table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 0px; border-top-style: none; min-width: 1px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_14" class="blk_wrapper" style="">
                                                                    <table cellspacing="0" cellpadding="0" border="0" style="" name="blk_social_follow" width="600" class="blk">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain" align="center" style="padding-top:20px; padding-bottom:20px; padding-left:20px; padding-right:20px;">
                                                                                    <table class="tblContainer mblSocialContain" cellspacing="0" cellpadding="0" border="0" align="center" style="text-align:center;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdItemContainer">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="mblSocialContain" style="table-layout: auto;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" name="bmeSocialTD" class="bmeSocialTD">
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0"
                                                                                                                        border="0" class="bmeFollowItem" type="facebook" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="padding-right:20px;height:20px;">
                                                                                                                                    <a href="http://benchmarkemail.benchurl.com/c/l?u=5EE6FDB&e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&seq=1" target=_blank style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgba(0, 0, 0, 0);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/fb_btn.png" alt="Facebook" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeFollowItem" type="twitter" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="padding-right:20px;height:20px;">
                                                                                                                                    <a href="http://benchmarkemail.benchurl.com/c/l?u=5EE6FDD&e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&seq=1" target=_blank style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgba(0, 0, 0, 0);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/tw_btn.png" alt="Twitter" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeFollowItem" type="email" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="height:20px;">
                                                                                                                                    <a href="mailto:"style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgb(0, 0, 238);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/em_btn.png" alt="Email" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_10" class="blk_wrapper" style="">
                                                                    <table cellspacing="0" cellpadding="0" border="0" name="blk_divider" width="600" class="blk">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style="padding: 10px 0px;" class="tblCellMain">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top-width: 0px; border-top-style: none; min-width: 1px;" class="tblLine">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="100%" class="blk_container bmeHolder" name="bmeFooter" valign="top" align="center" style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                <div id="dv_3" class="blk_wrapper">
                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_permission" style="">
                                                        <tbody>
                                                            <tr>
                                                                <td name="tblCell" class="tblCell" style="padding:20px;" valign="top" align="left"> 
                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td name="bmePermissionText" style="text-align:center;" align="center"><span style="font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px;line-height: 140%;"> <a style="color: #16a7e0;" target="_new" href="">Aqui você pode desinscrever-se</a>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</body>`
}
module.exports.enviarArqEmailResetSenha = enviarArqEmailResetSenha


function enviarArqEmailSugestao(data, msgs) {
    return html =
        `<style type="text/css">
        /*** BMEMBF Start ***/
        [name=bmeMainBody] {
            min-height: 1000px;
        }

        @media only screen and (max-width: 480px) {

            table.blk,
            table.tblText,
            .bmeHolder,
            .bmeHolder1,
            table.bmeMainColumn {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td.tblCell {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td.tblCell {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td.tblCell {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.tblGtr {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td.blk_container,
            .blk_parent,
            .bmeLeftColumn,
            .bmeRightColumn,
            .bmeColumn1,
            .bmeColumn2,
            .bmeColumn3,
            .bmeBody {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table.container-table,
            .bmeheadertext,
            .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .mobile-footer,
            .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table.share-tbl {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table.share-tbl td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td.bmeShareTD,
            td.bmeSocialTD {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.tdBoxedTextBorder {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table.blk,
            table[name=tblText],
            .bmeHolder,
            .bmeHolder1,
            table[name=bmeMainColumn] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable td[name=tblCell] {
                padding: 0px 20px 20px 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeCaptionTable.bmeCaptionTableMobileTop td[name=tblCell] {
                padding: 20px 20px 0 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable td[name=tblCell] {
                padding: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table[name=tblGtr] {
                padding-bottom: 20px !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td.blk_container,
            .blk_parent,
            [name=bmeLeftColumn],
            [name=bmeRightColumn],
            [name=bmeColumn1],
            [name=bmeColumn2],
            [name=bmeColumn3],
            [name=bmeBody] {
                display: table !important;
                max-width: 600px !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table[class=container-table],
            .bmeheadertext,
            .container-table {
                width: 95% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .mobile-footer,
            .mobile-footer a {
                font-size: 13px !important;
                line-height: 18px !important;
            }

            .mobile-footer {
                text-align: center !important;
            }

            table[class="share-tbl"] {
                padding-bottom: 15px;
                width: 100% !important;
            }

            table[class="share-tbl"] td {
                display: block !important;
                text-align: center !important;
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            td[name=bmeShareTD],
            td[name=bmeSocialTD] {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td[name=tdBoxedTextBorder] {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeImageCard table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 20px !important;
                clear: both;
                float: left !important;
                border-collapse: separate;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblInline table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable {
                height: auto !important;
                width: 100% !important;
                padding: 10px !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeCaptionTable {
                width: 100% !important;
                clear: both;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageContainer {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            table.bmeImageTable td {
                padding: 0px !important;
                height: auto;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeImageContainerRow {
                padding: 0px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            img.mobile-img-large {
                width: 100% !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            img.bmeRSSImage {
                max-width: 320px;
                height: auto !important;
            }
        }

        @media only screen and (min-width: 640px) {
            img.bmeRSSImage {
                max-width: 600px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .trMargin img {
                height: 10px;
            }
        }

        @media only screen and (max-width: 480px) {

            div.bmefooter,
            div.bmeheader {
                display: block !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart {
                width: 100% !important;
                clear: both;
                float: left !important;
            }
        }

        @media only screen and (max-width: 480px) {

            table.blk_parent1,
            table.tblPart {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tblLine {
                min-width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblCenter img {
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblCenter,
            .bmeMblCenter div,
            .bmeMblCenter span {
                text-align: center !important;
                text-align: -webkit-center !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeNoBr br,
            .bmeImageGutterRow,
            .bmeMblStackCenter .bmeShareItem .tdMblHide {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblInline table.bmeImageTable,
            .bmeMblInline table.bmeCaptionTable,
            td.bmeMblInline {
                clear: none !important;
                width: 50% !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblInlineHide,
            .bmeShareItem .trMargin {
                display: none !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .bmeMblInline table.bmeImageTable img,
            .bmeMblShareCenter.tblContainer.mblSocialContain,
            .bmeMblFollowCenter.tblContainer.mblSocialContain {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack>.bmeShareItem {
                width: 100% !important;
                clear: both !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItem {
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {

            .tdPart.bmeMblStackCenter,
            .bmeMblStackCenter .bmeFollowItemIcon {
                padding: 0px !important;
                text-align: center !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter>.bmeShareItem {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            td.bmeMblCenter {
                border: 0 none transparent !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeLinkTable.tdPart td {
                padding-left: 0px !important;
                padding-right: 0px !important;
                border: 0px none transparent !important;
                padding-bottom: 15px !important;
                height: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdMblHide {
                width: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeShareItemBtn {
                display: table !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack td {
                text-align: left !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStack .bmeFollowItem {
                clear: both !important;
                padding-top: 10px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItemText {
                padding-left: 5px !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .bmeMblStackCenter .bmeFollowItem {
                clear: both !important;
                align-self: center;
                float: none !important;
                padding-top: 10px;
                margin: 0 auto;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart>table {
                width: 100% !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart>table.bmeLinkContainer {
                width: auto !important;
            }
        }

        @media only screen and (max-width: 480px) {
            .tdPart.mblStackCenter>table.bmeLinkContainer {
                width: 100% !important;
            }
        }

        .blk_parent:first-child,
        .blk_parent {
            float: left;
        }

        .blk_parent:last-child {
            float: right;
        }

        /*** BMEMBF END ***/

        table[name="bmeMainBody"],
        body {
            background-color: #2f2f2f;
        }

        td[name="bmePreHeader"] {
            background-color: #00ae54;
        }

        td[name="bmeHeader"] {
            background: #ffffff;
            background-color: #00ae54;
        }

        td[name="bmeBody"],
        table[name="bmeBody"] {
            background-color: #ffffff;
        }

        td[name="bmePreFooter"] {
            background-color: #ffffff;
        }

        td[name="bmeFooter"] {
            background-color: #ffffff;
        }

        td[name="tblCell"],
        .blk {
            font-family: initial;
            font-weight: normal;
            font-size: initial;
        }

        table[name="blk_blank"] td[name="tblCell"] {
            font-family: Arial, Helvetica, sans-serif;
            font-size: 14px;
        }

        [name=bmeMainContentParent] {
            border-color: #666666;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
            overflow: hidden;
        }

        [name=bmeMainColumnParent] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
        }

        [name=bmeMainColumn] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
        }

        [name=bmeMainContent] {
            border-color: transparent;
            border-width: 0px;
            border-style: none;
            border-radius: 0px;
            border-collapse: separate;
            border-spacing: 0px;
        }
        .negrito{
            font-weight: bold;
        }
</style>

<body marginheight=0 marginwidth=0 topmargin=0 leftmargin=0 style="height: 100% !important; margin: 0; padding: 0; width: 100% !important;min-width: 100%;">

<table width="100%" cellspacing="0" cellpadding="0" border="0" name="bmeMainBody" style="background-color: rgb(47, 47, 47);" bgcolor="#2f2f2f">
    <tbody>
        <tr>
            <td width="100%" valign="top" align="center">
                <table cellspacing="0" cellpadding="0" border="0" name="bmeMainColumnParentTable">
                    <tbody>
                        <tr>
                            <td name="bmeMainColumnParent"
                                style="border: 0px none transparent; border-radius: 0px; border-collapse: separate;">
                                <table name="bmeMainColumn" class="bmeHolder bmeMainColumn" style="max-width: 600px; border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: visible;" cellspacing="0" cellpadding="0" border="0" align="center">
                                    <tbody>
                                        <tr>
                                            <td width="100%" class="blk_container bmeHolder" name="bmePreHeader" valign="top" align="center" style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(238, 146, 40);" bgcolor="#00ae54"></td>
                                        </tr>
                                        <tr>
                                            <td width="100%" class="bmeHolder" valign="top" align="center" name="bmeMainContentParent" style="border: 0px none rgb(102, 102, 102); border-radius: 0px; border-collapse: separate; border-spacing: 0px; overflow: hidden;">
                                                <table name="bmeMainContent" style="border-radius: 0px; border-collapse: separate; border-spacing: 0px; border: 0px none transparent;"  width="100%" cellspacing="0" cellpadding="0" border="0" align="center">
                                                    <tbody>
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder" name="bmeHeader" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(238, 146, 40);" bgcolor="#00ae54">
                                                                <div id="dv_1" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" align="left" name="tblCell" style="padding: 15px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                                    <div style="line-height: 200%; text-align: right;">
                                                                                                                
                                                                                                                    </div>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder bmeBody" name="bmeBody" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                                <div id="dv_15" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain" style="padding: 10px 0px;">
                                                                                    <table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 0px; border-top-style: none; min-width: 1px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_11" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_image">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td align="center" class="bmeImage" style="border-collapse: collapse; padding: 20px;">
                                                                                                    <img src="http://foodtok.com.br/uploads/2021-02-16T19-58-27.783Z-0000000 logobr.png" width="52" style="width:200px; display: block;" alt="" border="0">
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_17" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0"  width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                    <tbody>
                                                                                                    <tr>
                                                                                                        <td valign="top" align="left" name="tblCell" style="padding: 10px 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                            <div
                                                                                                                style="line-height: 150%; text-align: center;">
                                                                                                                <h1 style="color: #464646; line-height: 150%;"><strong> Olá, ${data[0].vennome}.</strong></h2>
                                                                                                                <br>
                                                                                                                    <p style="text-align: justify; font-size: 14px; font-family: Arial, Helvetica, sans-serif; color: #464646; line-height: 150%;">
                                                                                                                        Obrigado por sua sugestão!<br>
                                                                                                                        Agradescemos por você ter disponibilizado esse tempinho para nos ajudar a melhorar a plataforma, estaremos analisando sua sugestão:<br><br>

                                                                                                                        <div style="text-align:justify;font-size:14px;font-family:Arial,Helvetica,sans-serif;color:#464646;line-height:150%">
                                                                                                                            Título: ${msgs.titulo} <br>
                                                                                                                            Sugestão: ${msgs.texto} 
                                                                                                                        </div>
                                                                                                                        <br>
                                                                                                                        <div style="text-align:justify;font-size:14px;font-family:Arial,Helvetica,sans-serif;color:#464646;line-height:150%">
                                                                                                                            Caso tenha qualquer dúvida ou dificuldade você também pode nos contatar através do e-mail: contato@foodtok.com.br 
                                                                                                                        </div>    
                                                                                                                    </p>
                                                                                                            </div>
                                                                                                        </td>
                                                                                                    </tr>
                                                                                                </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>


                                                            </td>
                                                        </tr>
                                                    
                                                        <tr>
                                                            <td width="100%" class="blk_container bmeHolder" name="bmePreFooter" valign="top" align="center" style="color: rgb(56, 56, 56); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                                <div id="dv_5" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_text">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td>
                                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%" class="bmeContainerRow">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdPart" valign="top" align="center">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" width="600" name="tblText" style="float:left; background-color:transparent;" align="left" class="tblText">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" align="left" name="tblCell" style="padding: 20px; font-family: Arial, Helvetica, sans-serif; font-size: 14px; font-weight: 400; color: rgb(56, 56, 56); text-align: left;" class="tblCell">
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_9" class="blk_wrapper" style="">
                                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_divider" style="">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain"
                                                                                    style="padding: 10px 20px;">
                                                                                    <table class="tblLine" cellspacing="0" cellpadding="0" border="0" width="100%" style="border-top-width: 0px; border-top-style: none; min-width: 1px;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_14" class="blk_wrapper" style="">
                                                                    <table cellspacing="0" cellpadding="0" border="0" style="" name="blk_social_follow" width="600" class="blk">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td class="tblCellMain" align="center" style="padding-top:20px; padding-bottom:20px; padding-left:20px; padding-right:20px;">
                                                                                    <table class="tblContainer mblSocialContain" cellspacing="0" cellpadding="0" border="0" align="center" style="text-align:center;">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td class="tdItemContainer">
                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="mblSocialContain" style="table-layout: auto;">
                                                                                                        <tbody>
                                                                                                            <tr>
                                                                                                                <td valign="top" name="bmeSocialTD" class="bmeSocialTD">
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0"
                                                                                                                        border="0" class="bmeFollowItem" type="facebook" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="padding-right:20px;height:20px;">
                                                                                                                                    <a href="http://benchmarkemail.benchurl.com/c/l?u=5EE6FDB&e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&seq=1" target=_blank style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgba(0, 0, 0, 0);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/fb_btn.png" alt="Facebook" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeFollowItem" type="twitter" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="padding-right:20px;height:20px;">
                                                                                                                                    <a href="http://benchmarkemail.benchurl.com/c/l?u=5EE6FDD&e=8E4B52&c=91CEA&t=1&l=7889F345&email=hL2iimIGZvj2QooSzVze1t7P%2FZjRPRKrj2c0%2B7DqUhU%3D&seq=1" target=_blank style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgba(0, 0, 0, 0);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/tw_btn.png" alt="Twitter" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                    <!--[if gte mso 6]></td><td align="left" valign="top"><![endif]-->
                                                                                                                    <table cellspacing="0" cellpadding="0" border="0" class="bmeFollowItem" type="email" style="float: left; display: block;" align="left">
                                                                                                                        <tbody>
                                                                                                                            <tr>
                                                                                                                                <td align="left" class="bmeFollowItemIcon" gutter="20" width="24" style="height:20px;">
                                                                                                                                    <a href="mailto:"style="display: inline-block;background-color: rgb(238, 146, 40);border-radius: 0px;border-style: none; border-width: 0px; border-color: rgb(0, 0, 238);" target="_blank">
                                                                                                                                        <img src="https://ui.benchmarkemail.com/images/editor/socialicons/em_btn.png" alt="Email" style="display: block; max-width: 114px;" border="0" width="24" height="24">
                                                                                                                                    </a>
                                                                                                                                </td>
                                                                                                                            </tr>
                                                                                                                        </tbody>
                                                                                                                    </table>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                                <div id="dv_10" class="blk_wrapper" style="">
                                                                    <table cellspacing="0" cellpadding="0" border="0" name="blk_divider" width="600" class="blk">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td style="padding: 10px 0px;" class="tblCellMain">
                                                                                    <table width="100%" cellspacing="0" cellpadding="0" border="0" style="border-top-width: 0px; border-top-style: none; min-width: 1px;" class="tblLine">
                                                                                        <tbody>
                                                                                            <tr>
                                                                                                <td><span></span>
                                                                                                </td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td width="100%" class="blk_container bmeHolder" name="bmeFooter" valign="top" align="center" style="color: rgb(102, 102, 102); border: 0px none transparent; background-color: rgb(255, 255, 255);" bgcolor="#ffffff">
                                                <div id="dv_3" class="blk_wrapper">
                                                    <table width="600" cellspacing="0" cellpadding="0" border="0" class="blk" name="blk_permission" style="">
                                                        <tbody>
                                                            <tr>
                                                                <td name="tblCell" class="tblCell" style="padding:20px;" valign="top" align="left"> 
                                                                    <table cellpadding="0" cellspacing="0" border="0" width="100%">
                                                                        <tbody>
                                                                            <tr>
                                                                                <td name="bmePermissionText" style="text-align:center;" align="center"><span style="font-family: Arial, Helvetica, sans-serif; font-weight: normal; font-size: 11px;line-height: 140%;"> <a style="color: #16a7e0;" target="_new" href="">Aqui você pode desinscrever-se</a>
                                                                                    </span>
                                                                                </td>
                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
    </tbody>
</table>
</body>`
}
module.exports.enviarArqEmailSugestao = enviarArqEmailSugestao