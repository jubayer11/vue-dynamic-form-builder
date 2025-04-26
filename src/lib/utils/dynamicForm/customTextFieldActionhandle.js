import {popUpOrRoute} from "@/lib/utils/table/customizableTable";
import {dialog, dialogValue} from "@/lib/composable/globalVariable";




export const executeActionIcon=(icon,parentComponent,router)=>{
    //console.log(dialog.value);
    if (icon?.popUpOrRoute?.isPopUpOrRoute === popUpOrRoute.route){
        router.push(icon?.popUpOrRoute?.module);
    }
    else if (icon?.popUpOrRoute?.isPopUpOrRoute === popUpOrRoute.popUp){
        dialog.value[icon?.popUpOrRoute?.module]=true;
        dialogValue.value=icon?.popUpOrRoute?.module;
    }
}

export const executeActionButton=(button,parentComponent,router)=>{

    //console.log('dfgvcbcxvb',button?.popUpOrRoute?.isPopUpRoute);

    if (button?.popUpOrRoute?.isPopUpOrRoute === popUpOrRoute.route){
        router.push(button?.popUpOrRoute?.module);
    }

    else if (button?.popUpOrRoute?.isPopUpOrRoute === popUpOrRoute.popUp){

        dialog.value[button?.popUpOrRoute?.module]=true;
        dialogValue.value=button?.popUpOrRoute?.module;
    }

}