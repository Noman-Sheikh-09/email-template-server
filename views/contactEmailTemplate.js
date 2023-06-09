module.exports = (props) => {
  const { name, email, message, topic } = props;
  // console.log(email, name, "request body data");

  const d = new Date();
  const date = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  let sendIDTemplate = `<!DOCTYPE html
    PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
  <html
    style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
  
  <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta content="telephone=no" name="format-detection">
    <title>BisResume</title>
    <!--[if (mso 16)]>
  <style type="text/css">
  a {text-decoration: none;}
  </style>
  <![endif]-->
    <!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]-->
    <!--[if !mso]> -->
    <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,400i,700,700i" rel="stylesheet">
    <!--<![endif]-->
    <style type="text/css">
      @media only screen and (max-width:600px) {
  
        p,
        ul li,
        ol li,
        a {
          font-size: 16px !important;
          line-height: 150% !important
        }
  
        h1 {
          font-size: 32px !important;
          text-align: center;
          line-height: 120% !important
        }
  
        h2 {
          font-size: 26px !important;
          text-align: center;
          line-height: 120% !important
        }
  
        h3 {
          font-size: 20px !important;
          text-align: center;
          line-height: 120% !important
        }
  
        h1 a {
          font-size: 32px !important
        }
  
        h2 a {
          font-size: 26px !important
        }
  
        h3 a {
          font-size: 20px !important
        }
  
        .es-menu td a {
          font-size: 16px !important
        }
  
        .es-header-body p,
        .es-header-body ul li,
        .es-header-body ol li,
        .es-header-body a {
          font-size: 16px !important
        }
  
        .es-footer-body p,
        .es-footer-body ul li,
        .es-footer-body ol li,
        .es-footer-body a {
          font-size: 16px !important
        }
  
        .es-infoblock p,
        .es-infoblock ul li,
        .es-infoblock ol li,
        .es-infoblock a {
          font-size: 12px !important
        }
  
        *[class="gmail-fix"] {
          display: none !important
        }
  
        .es-m-txt-c,
        .es-m-txt-c h1,
        .es-m-txt-c h2,
        .es-m-txt-c h3 {
          text-align: center !important
        }
  
        .es-m-txt-r,
        .es-m-txt-r h1,
        .es-m-txt-r h2,
        .es-m-txt-r h3 {
          text-align: right !important
        }
  
        .es-m-txt-l,
        .es-m-txt-l h1,
        .es-m-txt-l h2,
        .es-m-txt-l h3 {
          text-align: left !important
        }
  
        .es-m-txt-r img,
        .es-m-txt-c img,
        .es-m-txt-l img {
          display: inline !important
        }
  
        .es-button-border {
          display: inline-block !important
        }
  
        a.es-button {
          font-size: 16px !important;
          display: inline-block !important;
          border-width: 15px 30px 15px 30px !important
        }
  
        .es-btn-fw {
          border-width: 10px 0px !important;
          text-align: center !important
        }
  
        .es-adaptive table,
        .es-btn-fw,
        .es-btn-fw-brdr,
        .es-left,
        .es-right {
          width: 100% !important
        }
  
        .es-content table,
        .es-header table,
        .es-footer table,
        .es-content,
        .es-footer,
        .es-header {
          width: 100% !important;
          max-width: 600px !important
        }
  
        .es-adapt-td {
          display: block !important;
          width: 100% !important
        }
  
        .adapt-img {
          width: 100% !important;
          height: auto !important
        }
  
        .es-m-p0 {
          padding: 0px !important
        }
  
        .es-m-p0r {
          padding-right: 0px !important
        }
  
        .es-m-p0l {
          padding-left: 0px !important
        }
  
        .es-m-p0t {
          padding-top: 0px !important
        }
  
        .es-m-p0b {
          padding-bottom: 0 !important
        }
  
        .es-m-p20b {
          padding-bottom: 20px !important
        }
  
        .es-mobile-hidden,
        .es-hidden {
          display: none !important
        }
  
        .es-desk-hidden {
          display: table-row !important;
          width: auto !important;
          overflow: visible !important;
          float: none !important;
          max-height: inherit !important;
          line-height: inherit !important
        }
  
        .es-desk-menu-hidden {
          display: table-cell !important
        }
  
        table.es-table-not-adapt,
        .esd-block-html table {
          width: auto !important
        }
  
        table.es-social {
          display: inline-block !important
        }
  
        table.es-social td {
          display: inline-block !important
        }
      }
  
      #outlook a {
        padding: 0;
      }
  
      .ExternalClass {
        width: 100%;
      }
  
      .ExternalClass,
      .ExternalClass p,
      .ExternalClass span,
      .ExternalClass font,
      .ExternalClass td,
      .ExternalClass div {
        line-height: 100%;
      }
  
      .es-button {
        mso-style-priority: 100 !important;
        text-decoration: none !important;
      }
  
      a[x-apple-data-detectors] {
        color: inherit !important;
        text-decoration: none !important;
        font-size: inherit !important;
        font-family: inherit !important;
        font-weight: inherit !important;
        line-height: inherit !important;
      }
  
      .es-desk-hidden {
        display: none;
        float: left;
        overflow: hidden;
        width: 0;
        max-height: 0;
        line-height: 0;
        mso-hide: all;
      }
    </style>
  </head>
  
  <body
    style="width:100%;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0;">
    <div class="es-wrapper-color" style="background-color:#EEEEEE;">
      <!--[if gte mso 9]>
  <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
  <v:fill type="tile" color="#eeeeee"></v:fill>
  </v:background>
  <![endif]-->
      <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;">
        <tr style="border-collapse:collapse;">
          <td valign="top" style="padding:0;Margin:0;">
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;">
              <tr style="border-collapse:collapse;"></tr>
              <tr style="border-collapse:collapse;">
                <td align="center" style="padding:0;Margin:0;">
                  <table class="es-header-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#00004f;"
                    width="600" cellspacing="0" cellpadding="0" bgcolor="#044767" align="center">
                    <tr style="border-collapse:collapse;">
                      <td align="center" style="Margin:0;padding-top:5px;padding-bottom:5px;">
                        <!--[if mso]><table width="530" cellpadding="0" cellspacing="0"><tr><td width="340" valign="top"><![endif]-->
                        <table class="es-left" cellspacing="0" cellpadding="0" align="center"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                          <tr style="border-collapse:collapse;">
                            <td class="es-m-p0r es-m-p20b" width="340" valign="top" align="center"
                              style="padding:0;Margin:0;">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                <tr style="border-collapse:collapse;">
                                  <td class="es-m-txt-c" align="center"
                                    style="padding:0;padding-top: 15px;padding-bottom: 15px ;text-align: center;">
                                    <img
                                      src="https://res.cloudinary.com/techlosetsolutions/image/upload/v1616235115/Logo-text_tny1hp.png"
                                      width="250" alt="logo" class="img-fluid">
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;">
              <tr style="border-collapse:collapse;">
                <td align="center" style="padding:0;Margin:0;">
                  <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                    align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
                    <tr style="border-collapse:collapse;">
                      <td align="left" style="padding:0;Margin:0;padding-left:35px;padding-right:35px;">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                          <tr style="border-collapse:collapse;">
                            <td width="530" valign="top" align="center" style="padding:0;Margin:0;">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                <tr style="border-collapse:collapse;">
                                  <td align="center"
                                    style="Margin:0;padding-top:20px;padding-bottom:10px;padding-left:45px;padding-right:35px;">
                                    <span
                                      style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:16px;text-decoration:none;color:#ED8E20;">
                                      <img
                                        src="https://res.cloudinary.com/techlosetsolutions/image/upload/v1617023999/absent_wruors.png"
                                        alt
                                        style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;"
                                        width="100"></span>
                                  </td>
                                </tr>
                                <tr style="border-collapse:collapse;">
                                  <td align="center" style="padding:0;Margin:0;padding-bottom:10px;">
                                    <h2
                                      style="Margin:0;line-height:36px;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;font-size:30px;font-style:normal;font-weight:bold;color:#333333;opacity: 0.5;">
                                      I am ${name}  <br> </h2>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;">
              <tr style="border-collapse:collapse;">
                <td align="center" style="padding:0;Margin:0;">
                  <table class="es-content-body" width="600" cellspacing="0" cellpadding="0" bgcolor="#ffffff"
                    align="center"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
                    <tr style="border-collapse:collapse;">
                      <div style="width:600px;background-color:white;">
                        <p
                          style="color:white;width:70%;position:relative;bottom:-17px;background-color:#00004f;padding:10px;text-align:center;Margin:0;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif; margin:0 auto">
                        Topic : ${topic} </p>
                      </div>
                    </tr>
                    <tr style="border-collapse:collapse;">
                      <td align="left"
                        style="padding:20px 10px 10px 10px;Margin:0;background-color:white;box-shadow:-1px 4px 16px #d0cfcf;padding:10px 0px;">
                        <table width="100%" cellspacing="0" cellpadding="0"
                          style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                          <tr style="border-collapse:collapse;">
                            <td width="530" valign="top" align="center" style="padding:0;Margin:0;">
                              <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                <tr style="border-collapse:collapse;">
                                  <td align="left"
                                    style="Margin:0;padding-top:20px;padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                    <table
                                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;"
                                      class="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left"
                                      role="presentation">
                                      
                                      
                                      <tr style="border-collapse:collapse;height:30px;background-color:#9999991c;">
                                        <td style="padding:0px 10px;Margin:0;" width="80%" align="left">
                                          <p style="color:#333;font-size:14px;font-weight:bold; text-align: justify;">
                                              
                                              DATE:  ${date}, ${
    month + 1
  }, ${year}
                                              <br>
                                              <br>
                                              TO: ${name}
                                              <br>
                                              <br>
                                             ${message}
                                          </p>
                                        </td>
                                      </tr>
                                    </table>
                                  </td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>
                    <tr style="border-collapse:collapse;">
                    <td 
                      style="padding:0;Margin:0;padding-top:25px;padding-bottom:15px;padding-left:5px;padding-right:5px;">
                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                              <tr style="border-collapse:collapse;">
                                <td 
                                  style="Margin:0;padding-top:0px;padding-bottom:10px;padding-left:10px;padding-right:10px;">
                                  <table
                                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;"
                                    class="cke_show_border" cellspacing="1" cellpadding="1" border="0" align="left"
                                    role="presentation">
                                    <tr style="border-collapse:collapse;">
                                      <td width="80%" style="padding:0;Margin:0;">
                                        <p
                                          style="text-align: left;font-size: small; opacity:0.7; Margin:0;margin-bottom:10px;line-height:120%;mso-line-height-rule:exactly;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;">
                                          If you have any questions or feel that you've received this message in error, please contact <b>hr@techloset.com</b>!
  Your very own Technology Closet, Techloset Solutions PVT, LTD.</p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </table>
                    </td>
                  </tr>
                  </table>
                </td>
              </tr>
            </table>
            <table class="es-content" cellspacing="0" cellpadding="0" align="center"
              style=" mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;">
              <tr style="border-collapse:collapse;">
                <td align="center" style="padding:0;Margin:0;">
                  <table class="es-content-body"
                    style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#1B9BA3;"
                    width="600" cellspacing="0" cellpadding="0" bgcolor="#1b9ba3" align="center">
                    <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;">
                      <tr style="border-collapse:collapse;">
                        <td align="center" style="padding:0;Margin:0;">
                          <table class="es-content-body" style="background-color: #00004f;" width="600" cellspacing="0"
                            cellpadding="0" bgcolor="#ffffff" align="center"
                            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;">
                            <tr style="border-collapse:collapse;">
                              <td align="left"
                                style="padding:0;Margin:0;padding-top:10px;padding-left:35px;padding-right:35px;">
                                <table width="100%" cellspacing="0" cellpadding="0"
                                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                  <tr style="border-collapse:collapse;">
                                    <td align="left"
                                      style="Margin:0;padding-bottom:10px;padding-left:35px;padding-right:35px;">
                                      <table width="100%" cellspacing="0" cellpadding="0"
                                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                        <tr style="border-collapse:collapse;">
                                          <td width="530" valign="top" align="center" style="padding:0;Margin:0;">
                                            <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;">
                                              <tr style="border-collapse:collapse;">
                                                <td align="center" style="padding:0;Margin:0;padding-bottom:5px;">
                                                  <p
                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#FFF;">
                                                    <strong>Sincerely.</strong>
                                                  </p>
                                                  <p
                                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-size:12px;font-family:'open sans', 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#FFF;">
                                                    <strong>Your Techloset Team!</strong>
                                                  </p>
                                                </td>
                                              </tr>
                                              <tr style="border-collapse:collapse;">
                                                <td align="center"
                                                  style="padding:0;Margin:0;padding-top: 10px; padding-bottom:5px;">
                                                  <img
                                                    src="https://res.cloudinary.com/techlosetsolutions/image/upload/v1616235115/Logo-text_tny1hp.png"
                                                    alt="footer logo" width="150" class="img-fluid mb-3">
                                                </td>
                                              </tr>
                                            </table>
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </table>
                </td>
              </tr>
            </table>
    </div>
  </body>
  
  </html>
    `;
  return sendIDTemplate;
};
