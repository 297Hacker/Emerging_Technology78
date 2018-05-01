"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var home_view_model_1 = require("./home-view-model");
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new home_view_model_1.HomeViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
function onItemTap(args) {
    var view = args.view;
    var page = view.page;
    var tappedItem = view.bindingContext;
    page.frame.navigate({
        moduleName: "home/home-item-detail/home-item-detail-page",
        context: tappedItem,
        animated: true,
        transition: {
            name: "slide",
            duration: 200,
            curve: "ease"
        }
    });
}
exports.onItemTap = onItemTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS1pdGVtcy1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS1pdGVtcy1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBSUEscURBQWtEO0FBR2xELHdCQUErQixJQUFtQjtJQUM5QyxJQUFNLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSwrQkFBYSxFQUFFLENBQUM7QUFDOUMsQ0FBQztBQUhELHdDQUdDO0FBRUQsbUJBQTBCLElBQW1CO0lBQ3pDLElBQU0sSUFBSSxHQUFTLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDN0IsSUFBTSxJQUFJLEdBQVMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUM3QixJQUFNLFVBQVUsR0FBUyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBRTdDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBQ2hCLFVBQVUsRUFBRSw2Q0FBNkM7UUFDekQsT0FBTyxFQUFFLFVBQVU7UUFDbkIsUUFBUSxFQUFFLElBQUk7UUFDZCxVQUFVLEVBQUU7WUFDUixJQUFJLEVBQUUsT0FBTztZQUNiLFFBQVEsRUFBRSxHQUFHO1lBQ2IsS0FBSyxFQUFFLE1BQU07U0FDaEI7S0FDSixDQUFDLENBQUM7QUFDUCxDQUFDO0FBZkQsOEJBZUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xyXG5pbXBvcnQgeyBJdGVtRXZlbnREYXRhIH0gZnJvbSBcInVpL2xpc3Qtdmlld1wiO1xyXG5pbXBvcnQgeyBOYXZpZ2F0ZWREYXRhLCBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuXHJcbmltcG9ydCB7IEhvbWVWaWV3TW9kZWwgfSBmcm9tIFwiLi9ob21lLXZpZXctbW9kZWxcIjtcclxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL3NoYXJlZC9pdGVtXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb25OYXZpZ2F0aW5nVG8oYXJnczogTmF2aWdhdGVkRGF0YSkge1xyXG4gICAgY29uc3QgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xyXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBIb21lVmlld01vZGVsKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbkl0ZW1UYXAoYXJnczogSXRlbUV2ZW50RGF0YSkge1xyXG4gICAgY29uc3QgdmlldyA9IDxWaWV3PmFyZ3MudmlldztcclxuICAgIGNvbnN0IHBhZ2UgPSA8UGFnZT52aWV3LnBhZ2U7XHJcbiAgICBjb25zdCB0YXBwZWRJdGVtID0gPEl0ZW0+dmlldy5iaW5kaW5nQ29udGV4dDtcclxuXHJcbiAgICBwYWdlLmZyYW1lLm5hdmlnYXRlKHtcclxuICAgICAgICBtb2R1bGVOYW1lOiBcImhvbWUvaG9tZS1pdGVtLWRldGFpbC9ob21lLWl0ZW0tZGV0YWlsLXBhZ2VcIixcclxuICAgICAgICBjb250ZXh0OiB0YXBwZWRJdGVtLFxyXG4gICAgICAgIGFuaW1hdGVkOiB0cnVlLFxyXG4gICAgICAgIHRyYW5zaXRpb246IHtcclxuICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxyXG4gICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxyXG4gICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG4iXX0=