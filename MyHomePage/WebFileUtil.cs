using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Blazor;
using Microsoft.JSInterop;

namespace MyHomePage
{
    public class WebFileUtil
    {
        public static Task<string> ShowPrompt(string message)
        {
            return JSRuntime.Current.InvokeAsync<string>("webFileUtil.showPrompt", message);
        }

        public static Task<string> ReadUploadedFileAsText(ElementRef inputElemRef)
        {
            return JSRuntime.Current.InvokeAsync<string>("webFileUtil.readUploadedFileAsText", inputElemRef);
        }

        public static Task WriteTextFileAndDownload(string fileName, string textContent)
        {
            return JSRuntime.Current.InvokeAsync<object>("webFileUtil.writeTextFileAndDownload", fileName, textContent);
        }

        public static Task<string[]> GetStringArray(string str, int count)
        {
            return JSRuntime.Current.InvokeAsync<string[]>("webFileUtil.getStringArray", str, count);
        }

        public static Task<string[]> ReadLargeTextFile(ElementRef inputElemRef, int sliceSize = 8192)
        {
            return JSRuntime.Current.InvokeAsync<string[]>("webFileUtil.readLargeTextFile", inputElemRef, sliceSize);
        }
    }

    public class WebFile
    {
        public static void InitBuffer(int length)
        {
            ((IJSInProcessRuntime) JSRuntime.Current).Invoke<object>("webFile.initBuffer", length);
        }

        public static void ClearBuffer()
        {
            ((IJSInProcessRuntime)JSRuntime.Current).Invoke<object>("webFile.clearBuffer");
        }

        public static int GetBufferLength()
        {
            return ((IJSInProcessRuntime) JSRuntime.Current).Invoke<int>("webFile.getBufferLength");
        }

        public static Task FillBuffer(string str)
        {
            return JSRuntime.Current.InvokeAsync<object>("webFile.fillBuffer", str);
        }

        public static Task<string> GetBufferData(int index)
        {
            return JSRuntime.Current.InvokeAsync<string>("webFile.getBufferData", index);
        }

        public static Task SetBufferData(int index, string str)
        {
            return JSRuntime.Current.InvokeAsync<object>("webFile.setBufferData", index, str);
        }

        public static Task<int> ReadFileToBuffer(ElementRef fileElemRef, int sliceSize = 8192)
        {
            return JSRuntime.Current.InvokeAsync<int>("webFile.readFileToBuffer", fileElemRef, sliceSize);
        }

        public static Task WriteBufferToFile(string fileName)
        {
            return JSRuntime.Current.InvokeAsync<object>("webFile.writeBufferToFile", fileName);
        }

        public static bool HasSelectedFile(ElementRef fileElemRef)
        {
            return ((IJSInProcessRuntime)JSRuntime.Current).Invoke<bool>("webFile.hasSelectedFile", fileElemRef);
        }
    }
}
