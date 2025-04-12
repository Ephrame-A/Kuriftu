from django.http import JsonResponse
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import csrf_exempt
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv
import os
from langchain_google_genai.chat_models import ChatGoogleGenerativeAI
from langchain_core.runnables import RunnablePassthrough
from langchain_core.output_parsers import StrOutputParser

load_dotenv()

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

@require_POST
@csrf_exempt
def assistant_response(request):
    if request.method == 'POST':
        user_message = request.POST.get('message')
        print(1)
        
        # Initialize the Gemini model
        google_gemini = ChatGoogleGenerativeAI(model="gemini-1.5-flash", google_api_key=GEMINI_API_KEY)
        print(2)
        
        # Create a prompt template
        prompt = PromptTemplate(
            input_variables=["user_message"],
            template="The user asks: {user_message}"
        )
        
        # Create a chain using the newer approach
        chain = (
            {"user_message": RunnablePassthrough()} 
            | prompt 
            | google_gemini 
            | StrOutputParser()
        )
        
        # Get assistant's response
        assistant_message = chain.invoke(user_message)
        print(assistant_message)
        
        return JsonResponse({"response": assistant_message})
    else:
        return JsonResponse({"response": "error"})
