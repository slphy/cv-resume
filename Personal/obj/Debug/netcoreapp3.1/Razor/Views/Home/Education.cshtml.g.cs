#pragma checksum "D:\All Project Files\Personal\Personal\Personal\Views\Home\Education.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b69eabb1fe2e231c345179996edf5cf9ec1799e3"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_Education), @"mvc.1.0.view", @"/Views/Home/Education.cshtml")]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#nullable restore
#line 1 "D:\All Project Files\Personal\Personal\Personal\Views\_ViewImports.cshtml"
using Personal;

#line default
#line hidden
#nullable disable
#nullable restore
#line 2 "D:\All Project Files\Personal\Personal\Personal\Views\_ViewImports.cshtml"
using Personal.Models;

#line default
#line hidden
#nullable disable
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b69eabb1fe2e231c345179996edf5cf9ec1799e3", @"/Views/Home/Education.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"87492209b2f161fcdf287a7e0d730e4cbc151d02", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_Education : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<EducationViewModel>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            WriteLiteral(@"
<style>
    .education {
        width: 40%;
        margin: 10px auto 30px;
        text-align: left;
        line-height: 1.5;
    }

    .educationimg {
        width: 35%;
        float: right;
        margin-left: 20px;
    }
</style>

<hr class=""purple-dot"" />
<div class=""text-center"">
    <div class=""education"" id=""educationContent"">
        <h2>Education</h2>
        <img class=""educationimg"" src=""/images/education.jpg"" alt=""education-img"">
        <ul>
            <li>");
#nullable restore
#line 24 "D:\All Project Files\Personal\Personal\Personal\Views\Home\Education.cshtml"
           Write(Model.University);

#line default
#line hidden
#nullable disable
            WriteLiteral("</li>\r\n            <li>");
#nullable restore
#line 25 "D:\All Project Files\Personal\Personal\Personal\Views\Home\Education.cshtml"
           Write(Model.Bachelor);

#line default
#line hidden
#nullable disable
            WriteLiteral(" | ");
#nullable restore
#line 25 "D:\All Project Files\Personal\Personal\Personal\Views\Home\Education.cshtml"
                             Write(Model.GraduatedDate);

#line default
#line hidden
#nullable disable
            WriteLiteral("</li>\r\n            <li>");
#nullable restore
#line 26 "D:\All Project Files\Personal\Personal\Personal\Views\Home\Education.cshtml"
           Write(Model.MajorDegree);

#line default
#line hidden
#nullable disable
            WriteLiteral("</li>\r\n            <li>");
#nullable restore
#line 27 "D:\All Project Files\Personal\Personal\Personal\Views\Home\Education.cshtml"
           Write(Model.ResultCGPA);

#line default
#line hidden
#nullable disable
            WriteLiteral("</li>\r\n            <li>");
#nullable restore
#line 28 "D:\All Project Files\Personal\Personal\Personal\Views\Home\Education.cshtml"
           Write(Model.Internship);

#line default
#line hidden
#nullable disable
            WriteLiteral("</li>\r\n        </ul>\r\n    </div>\r\n</div>\r\n\r\n<hr class=\"purple-dot\" />");
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<EducationViewModel> Html { get; private set; }
    }
}
#pragma warning restore 1591
