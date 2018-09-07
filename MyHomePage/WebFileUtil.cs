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
}
