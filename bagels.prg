
 � BAGELS  � C64 BASIC C � VARIABLE NAMES ARE ONLY 2CHARS Z � BE CARFUL NAMING | �*GET RAND SECRET NUMBERS**** �d S1 � �(�(0)�10) �n S2 � �(�(0)�10) �x � S2 � S1 � 110:� CHECK �� S3 � �(�(0)�10) �� � S3 � S1 � S3 � S2 � 130 �� �"�"; 
	� � 53281,0 	� �""; 5	� �"������������������������" ?	� �""; `	� �"I AM THINKING OF A NUMBER" {	� �"YOU HAVE 10 GUESSES" �	� �"I WILL GIVE YOU CLUES:" �	� �"PICO - 1 DIGIT BUT WRONG ORDER" �	� �"FERMI - 1 DIGIT RIGHT ORDER �	� �"BAGELS - NO DIGITS" 
� �"������������������������" &
� �""; <
� �  PRINT S1,S2,S3 S
� �*GET INPUT******* d
� � I � 1 � 10 y
� �"YOUR GUESS";G$ �
�"GUESS:",I, G$ �
,�*CHECK********** �
1H � 0 : � FOR BAGELS �
6T1��(�(G$,1,1)) �
@T2��(�(G$,2,1)) �
JT3��(�(G$,3,1)) O�** TEST FOR WIN******** >T� T1 � S1 � T2 � S2 � T3 � S3 � 1000 XY� TEST FOR FERMI PICO w^� T1 � S1 � �"FERMI":H�H�1 �h� T1 � S2 � T1 � S3 � � "PICO": H � H�1 �r� T2 � S2 � �"FERMI":H�H�1 �|� T2 � S1 � T2 � S3 � � "PICO": H � H� 1 �� T3 � S3 � �"FERMI":H�H�1 9�� T3 � S2 � T3 � S1 � � "PICO" : H�H�1 O�� TEST FOR BAGLES h�� H � 0 � � "BAGELS" p�� I ��� "TOO MANY GUESSES!!" ��� "THE ANSWER WAS" ��� S1;S2;S3 ��� ��� "YOU WIN!!!!"   