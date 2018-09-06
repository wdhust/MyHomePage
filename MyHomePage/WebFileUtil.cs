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
	}
}
